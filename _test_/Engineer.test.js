const Engineer = require("../library/Engineer.js");

test("Engineer - Constructor - name", () => {
  const testEngineer = new Engineer(
    "AN",
    12,
    "an@email.com",
    "https://github.com/jordanlindgren"
  );
  expect(testEngineer.getName()).toBe("AN");
});
test("Engineer - Constructor - id", () => {
  const testEngineer = new Engineer(
    "AN",
    12,
    "an@email.com",
    "https://github.com/jordanlindgren"
  );
  expect(testEngineer.getId()).toBe(12);
});
test("Engineer - Constructor - github", () => {
  const testEngineer = new Engineer(
    "AN",
    12,
    "an@email.com",
    "https://github.com/jordanlindgren"
  );
  expect(testEngineer.getGithub()).toBe("https://github.com/jordanlindgren");
});
test("Engineer - Constructor - role", () => {
  const testEngineer = new Engineer(
    "AN",
    12,
    "an@email.com",
    "https://github.com/jordanlindgren"
  );
  expect(testEngineer.getRole()).toBe("Engineer");
});
test("Engineer - Constructor - email", () => {
  const testEngineer = new Engineer(
    "AN",
    12,
    "an@email.com",
    "https://github.com/jordanlindgren"
  );
  expect(testEngineer.getEmail()).toBe("an@email.com");
});
