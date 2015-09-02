const Data = require('app/data');

let Opportunity = {
  close (sfid, stage, lostReason, closeNotes) {
    Opportunity.setStage(sfid, stage);
  },
  setAmount (sfid, amount) {
    let oppty = Data.getByTypeAndId('opportunity', sfid);
    if (oppty) {
      oppty.amount = amount;
      Data.setByTypeAndId('opportunity', sfid, oppty);
    }
  },
  setCloseDate (sfid, closeDate) {
    let oppty = Data.getByTypeAndId('opportunity', sfid);
    if (oppty) {
      oppty.closeDate = closeDate;
      Data.setByTypeAndId('opportunity', sfid, oppty);
    }
  },
  setStage (sfid, stage) {
    let oppty = Data.getByTypeAndId('opportunity', sfid);
    if (oppty) {
      oppty.stage = stage;
      Data.setByTypeAndId('opportunity', sfid, oppty);
    }
  }
};

module.exports = Opportunity;
