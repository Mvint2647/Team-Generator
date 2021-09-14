const Employee = require("../lib/Engineer");

test("set github to constructor",() => {
    const e = new Engineer ();
    expect(typeof(e)).toBe("object");
});

test("set getGithub to constructor username",() => {
    const userName = "Kayla";
    const e = new Engineer(userName);
    expect(e.userName).toBe(userName);
});

