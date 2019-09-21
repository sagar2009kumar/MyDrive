const mongoose = require("mongoose");

// eslint-disable-next-line new-cap
const fileSchema = mongoose.Schema({
  fileName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  versions: [
    {
      versionName: {
        type: String,
        required: true
      },
      pathName: {
        type: String,
        required: true
      }
    }
  ],
  history: [
    {
      description: {
        type: String,
        required: true
      },
      updateTime: {
        type: String,
        default: new Date()
      }
    }
  ]
});

const file = mongoose.model("file", fileSchema);

module.exports = file;
