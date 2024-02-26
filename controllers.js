const { client } = require("./connectpg.js");

(async () => {
  await client.connect();
  console.log("Connecting ro DB");
})();

const getAll = async (req, res) => {
  await client.query("select * from details", (err, ress) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(ress.rows);
      const data = ress.rows;
      res.status(200).json({ data });
    }
  });
};

const postOne = async (req, res) => {
  const { name, depart, dob, eid, sal, des, exp } = req.body;
  try {
    await client.query(
      `insert into details(empname,dept,dob,empid,experience,sal,desig) values($1,$2,$3,$4,$5,$6,$7)`,
      [name, depart, dob, eid, exp, sal, des]
    );
    res.send({ msg: "Success" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports = { getAll, postOne };
