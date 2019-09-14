const mongoose = require("mongoose");

const file = mongoose.model("file", {
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

module.exports = file;
