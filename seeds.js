const db=require("./models")

db.sequelize.sync().then(async () => {
  const rent =  db.Category.create({title: "Rent"});
  const bills =  db.Category.create({title: "Bills"});
  const vehicle =  db.Category.create({title: "Vehicle"});
  const personal =  db.Category.create({title: "Personal"});
  const accessories =  db.Category.create({title: "Accessories"});
  const food =  db.Category.create({title: "Food"});
  const travel =  db.Category.create({title: "Travel"});
  const other =  db.Category.create({title: "Other"});
});