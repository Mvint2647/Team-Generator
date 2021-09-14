const Employee = require("../Lib/Intern");

test("set school to constructor",() => {
    const e = new Intern ();
    expect(typeof(e)).toBe("object");
});

test("set getSchool to constructor username",() => {
    const userName = "Kayla";
    const e = new Intern(userName);
    expect(e.getSchool).toBe(getSchool);
});
