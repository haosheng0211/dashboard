import client from "@/utils/client";

export default {
  menu: {
    index: function() {
      return client.get("/menu");
    }
  }
};
