const https = require("https");

const url = "https://dns.google/resolve?name=_mongodb._tcp.cluster0.oney9lh.mongodb.net&type=SRV";

console.log("Fetching SRV records via Google DNS over HTTPS...");

https.get(url, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    try {
      const response = JSON.parse(data);
      if (!response.Answer || response.Answer.length === 0) {
        console.error("No SRV records returned by Google DoH. Response:", response);
        return;
      }

      console.log("\nSuccessfully resolved cluster nodes via DNS-over-HTTPS:");
      
      // Google DoH returns SRV data as a space-separated string: "priority weight port target"
      // Example: "0 0 27017 ac-b3q9tpx-shard-00-00.oney9lh.mongodb.net."
      const nodes = response.Answer.map(ans => {
        const parts = ans.data.split(" ");
        const port = parts[2];
        let target = parts[3];
        // Strip trailing dot
        if (target.endsWith(".")) {
          target = target.slice(0, -1);
        }
        return `${target}:${port}`;
      }).join(",");

      console.log(nodes);

      // We need to find the replicaSet name. Let's do a TXT record lookup to get the replicaSet details if any, or standard replicaSet name for Atlas: atlas-xxxxxx-shard-0.
      // Usually, we can query TXT records for cluster0.oney9lh.mongodb.net
      console.log("\nResolving TXT records for replicaSet options...");
      
      https.get("https://dns.google/resolve?name=cluster0.oney9lh.mongodb.net&type=TXT", (txtRes) => {
        let txtData = "";
        txtRes.on("data", (c) => txtData += c);
        txtRes.on("end", () => {
          try {
            const txtResponse = JSON.parse(txtData);
            let options = "ssl=true&authSource=admin";
            if (txtResponse.Answer && txtResponse.Answer.length > 0) {
              // TXT data contains authSource and replicaSet
              // Example txt value: "authSource=admin&replicaSet=atlas-2y46j4-shard-0"
              const txtVal = txtResponse.Answer[0].data.replace(/"/g, "");
              options = `${txtVal}&ssl=true`;
              console.log(`Found cluster options: ${txtVal}`);
            }

            console.log("\n=== PASTE THIS IN YOUR .env.local ===");
            console.log(`MONGODB_URI="mongodb://ChandraDeepVarma:ZWR0SieuwoPnj869@${nodes}/?${options}"`);
            console.log("=====================================\n");
          } catch (e) {
            console.log(`\nMONGODB_URI="mongodb://ChandraDeepVarma:ZWR0SieuwoPnj869@${nodes}/?ssl=true&authSource=admin"`);
          }
        });
      });

    } catch (err) {
      console.error("Failed to parse DoH response:", err);
    }
  });
}).on("error", (err) => {
  console.error("HTTP request failed:", err);
});
