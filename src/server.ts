import { PORT } from "@/shared";
import { DatabaseNoSQLHelper } from "@/external/helpers";
import { setupRest } from "@/main/rest";

DatabaseNoSQLHelper.connect()
  .then(async () => {
    setupRest().listen(PORT, () => console.log(`Server running at Port ${PORT}`));
  })
  .catch(console.error);