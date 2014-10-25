module.exports = {
  "mongodb": {
		"connectionstring": process.env.MONGODB || "mongodb://localhost:27017/test",
		"dbname": process.env.DBNAME || "grantsummary"
	},
	"logger": {
		"api": "logs/api.log",
		"exception": "logs/exceptions.log"
	}
};