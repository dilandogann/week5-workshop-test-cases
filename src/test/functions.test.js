const functions = require("./../functions");
const axios = require('axios');
jest.mock("axios");

describe("Device function tests", () => {

    it("it should return division", () => {
        expect(functions.divide(4, 2)).toBe(2);
    });
    it("it should return error if second parameter is zero", () => {
        expect(() => functions.divide(1, 0)).toThrow('Divide by zero error');
    });

    it("it should return error if parameters not a number", () => {
        expect(() => functions.divide('a', 1)).toThrow('Invalid error');
    });
})

describe("To upper function tests", () => {
    it("it should return upper case of all strings", () => {
        expect(functions.toUpper('hello bootcamp')).toBe('Hello Bootcamp')
    });
});
describe("Get users titles", () => {

    it("should return the post titles of the user who post the most", async () => {
        axios.get.mockImplementation(() => {
            return Promise.resolve([
                {
                    userId: 7,
                    id: 1,
                    title: "consequatur id enim sunt et et",
                    body: "voluptatibus ex essesint explicabo est aliquid cumque adipisci fuga repellat labore molestiae corrupti ex saepe at asperiores et perferendisnatus id esse incidunt pariatur"
                },
                {
                    userId: 7,
                    id: 2,
                    title: "repudiandae ea animi iusto",
                    body: "officia veritatis tenetur vero qui itaquesint non rationesed et ut asperiores iusto eos molestiae nostrumveritatis quibusdam et nemo iusto saepe"
                },
                {
                    userId: 7,
                    id: 3,
                    title: "fugiat quod pariatur odit minima",
                    body: "officiis error culpa consequatur modi asperiores etdolorum assumenda voluptas et vel qui aut vel rerumvoluptatum quisquam perspiciatis quia rerum consequatur totam quassequi commodi repudiandae asperiores et saepe a"
                },
                {
                    userId: 8,
                    id: 4,
                    title: "necessitatibus quasi exercitationem odio",
                    body: "modi ut in nulla repudiandae dolorum nostrum eosaut consequatur omnisut incidunt est omnis iste et quamvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"
                },
                {
                    userId: 8,
                    id: 5,
                    title: "quam voluptatibus rerum veritatis",
                    body: "nobis facilis odit tempore cupiditate quiaassumenda doloribus rerum qui eaillum et qui totam aut veniam repellendus"
                },
                {
                    userId: 10,
                    id: 6,
                    title: "ratione ex tenetur perferendis",
                    body: "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
                },
                {
                    userId: 10,
                    id: 7,
                    title: "qui qui voluptates illo iste minima",
                    body: "aspernatur expedita soluta quo ab ut similique expedita dolores ametsed temporibus distinctio magnam saepe delenitiomnis facilis nam ipsum natus sint similique omnis"
                },
                {
                    userId: 10,
                    id: 8,
                    title: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
                    body: "in non odio excepturi sint eumnlabore voluptates vitae quia qui etinventore itaque rerumveniam non exercitationem delectus aut"
                },
                {
                    userId: 10,
                    id: 9,
                    title: "temporibus sit alias delectus eligendi possimus magni",
                    body: "quo deleniti praesentium dicta non quodaut est molestiasnmolestias et officia quis nihilitaque dolorem quia"
                },
            ]
            )
        });
        const posts = await functions.getUserPosts()
        const titles = functions.getPostTitles(posts);

        expect(titles).toEqual(["ratione ex tenetur perferendis", "qui qui voluptates illo iste minima", "quaerat velit veniam amet cupiditate aut numquam ut sequi", "temporibus sit alias delectus eligendi possimus magni"]);

    })
})