const axios = require("axios");
const { BASE_URL, getAlbums } = require("./getAlbums");

jest.mock("axios");

describe("getAlbums", () => {
  describe("when API call is successful", () => {
    it("should return albums list", async () => {
      const albums = [
        { id: 1, name: "Highway to Hell" },
        { id: 2, name: "The Book Of Secrets" },
      ];
      axios.get.mockResolvedValueOnce(albums);

      const result = await getAlbums();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/albums`);
      expect(result).toEqual(albums);
    });
  });

  describe("when API call fails", () => {
    it("should return error message", async () => {
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await getAlbums();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/albums`);
      expect(result).toEqual("error");
    });
  });
});
