const axios = require("axios");
const  getUsers = require("./getUsers");

const BASE_URL = "https://jsonplaceholder.typicode.com";

jest.mock("axios");

describe("getUsers", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const users = [
        { id: 1, username: "Bret" },
        { id: 2, username: "Paul" },
      ];
      axios.get.mockResolvedValueOnce(users);

      // when
      const result = await getUsers();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual(expect.arrayContaining([{ id: 1, username: "Bret" } ]));
    });
  });

  describe("when API call fails", () => {
    it("should return error message", async () => {
      // given
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await getUsers();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual("error");
    });
  });
});
