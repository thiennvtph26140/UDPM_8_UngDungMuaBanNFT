import { request } from "../../helper/request.helper";

export class AdListNftApi  {
    static getAll() {
        return request({
          method: "POST",
          url: "https://api.shyft.to/sol/v0/marketplace/create",
        });
      }
};