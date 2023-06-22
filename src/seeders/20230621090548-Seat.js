'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('seats', [
      {
        seat_Identifire: '654059941-2',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '186150079-3',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '554266047-9',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '955883445-9',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '113273476-2',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '006890170-4',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '296284124-4',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '372259832-X',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '029228116-1',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '292549467-6',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '726092574-4',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '704770716-6',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '616679240-9',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '488073276-1',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '925856496-0',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '607894352-9',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '047828406-3',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '202665431-X',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '784103793-7',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '535457886-8',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '999153534-9',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '603962325-X',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '671176466-8',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '635323715-4',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '926184936-9',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '497402750-6',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '544053582-9',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '467904863-8',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '597507461-4',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '767276921-9',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '132807839-6',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '811935636-5',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '657293145-5',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '540893227-3',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '575065058-8',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '871034850-6',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '589262175-8',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '535325062-1',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '062857362-6',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '332579490-4',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '262684304-0',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '218740820-5',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '270197201-9',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '473596428-2',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '109449074-1',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '555711713-X',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '707416818-1',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '270663583-5',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '844777210-1',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '181964461-8',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '232869050-5',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '377239121-4',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '654043242-9',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '652618477-4',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '180123257-1',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '862980129-8',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '567288002-9',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '365003459-X',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '527693692-7',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '252131729-2',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '459798718-5',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '318327500-7',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '003597896-1',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '608629041-5',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '774324583-7',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '803025248-X',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '058306561-9',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '620767856-7',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '174541201-8',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '658021204-7',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '645838826-8',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '799611074-3',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '249634692-1',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '838015980-2',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '569192679-9',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '691507211-X',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '572075570-5',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '659111050-X',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '672483295-0',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '450551720-9',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '958035325-5',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '107261389-1',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '047713443-2',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '970856448-6',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '158201579-1',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '138953075-2',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '161712497-4',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '921466765-9',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '556366724-3',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '717289988-1',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '360867949-9',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '627233063-4',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '101939708-X',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '989796566-1',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '829880560-7',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '898865785-3',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '292774461-0',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '072116571-0',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '409857046-7',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '287531899-3',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '558040867-6',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '584672144-3',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '574191539-6',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '984949512-X',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '947899984-2',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '743988488-4',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '095910854-8',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '943990109-8',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '580270804-2',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '505978634-X',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '891698811-X',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '649570228-0',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '801672416-7',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '742154010-5',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '166428997-6',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '869585632-1',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '047537549-1',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '448678190-2',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '470787892-X',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '238221952-1',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '195280412-4',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '088723923-4',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '731691895-0',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '999251907-X',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '476879776-8',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '123565862-7',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '260468656-2',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '541381954-4',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '908965651-0',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '262370733-2',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '616226116-6',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '369482172-4',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '007686235-6',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '624576843-8',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '845805154-0',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '869108136-8',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '588548471-6',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '063369177-1',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '472126937-4',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '974996658-9',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '420950472-6',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '053844807-5',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '109253618-3',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '947102097-2',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '296510310-4',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '370782015-7',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '450720816-5',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '175958083-X',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '623207875-6',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '873283483-7',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '056812242-9',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '833779342-2',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '335752604-2',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '040804122-6',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '813859194-3',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '761024939-4',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '899537212-5',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '568173143-X',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '732486808-8',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '915419684-1',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '004399942-5',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '670509759-0',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '659667144-5',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '189527003-0',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '871495496-6',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '747353718-0',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '224680263-6',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '446617103-3',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '948243726-8',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '903979085-X',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '181679056-7',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '771978632-7',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '985303295-3',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '607897867-5',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '723262074-8',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '156482399-7',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '649335909-0',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '892383356-8',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '178935667-9',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '635659816-6',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '593016077-5',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '185694425-5',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '608757652-5',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '498012993-5',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '258905326-6',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '770786017-9',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '883753985-1',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '733834304-7',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '979278335-0',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '770758369-8',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '762580124-1',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '000063591-X',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '851266137-2',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '645575804-8',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '931683071-0',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '577638482-6',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '669014237-X',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '917035956-3',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '213271513-0',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '985118614-7',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '812993535-X',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '106923828-7',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '239918168-9',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '621358491-9',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '272169573-8',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '770921780-X',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '386541286-6',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '785182760-4',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '197890936-5',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '235856387-0',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '722758331-7',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '893346064-0',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '916327056-0',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '514653720-8',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '070236424-X',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '204075548-9',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '188025534-0',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '756379067-5',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '979607840-6',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '518380714-0',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '960536935-4',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '632303093-4',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '164706963-7',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '581857944-1',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '330128958-4',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '589209511-8',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '211085343-3',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '655937637-0',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '033099310-0',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '115681717-X',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '784691620-3',
    
    
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '014005321-2',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '909667579-7',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '519542199-4',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '098588842-3',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '004377768-6',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '748283374-9',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '765665495-X',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '218536129-5',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '131334024-3',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '074780030-8',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '760900690-4',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '548470560-6',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '303992900-3',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '735607469-9',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '695290377-1',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '006906097-5',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '418132884-8',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '194691319-7',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '846035808-9',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '046687228-3',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '774005000-8',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '893246453-7',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '811138733-4',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '604319170-9',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '069006105-6',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '258759313-1',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '771313208-2',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '933047315-6',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '852438568-5',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '120226576-6',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '136364305-3',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '581987445-5',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '120922726-6',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '452219276-2',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '334228707-1',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '943656264-0',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '791464183-9',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '720889007-2',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '457063413-3',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '126925210-0',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '480186246-2',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '096090205-8',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '345691912-3',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '604353562-9',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '567870932-1',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '194080462-0',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '933381450-7',
        seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '294368637-9',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '980566461-9',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '012959885-2',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '849875489-5',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '857395358-6',
        seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '855522733-X',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '258379705-0',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '634348798-0',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '256894304-1',
        seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '735782485-3',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '734962778-5',
        seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '752231905-6',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '148845680-1',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '431480473-4',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '797403939-6',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '973918114-7',
        seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '246991432-9',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '771668614-3',
        seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '898702240-4',
        seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '148448110-0',
        seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '776236593-1',
        seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_Identifire: '248920367-3',
        seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      
  {
    seat_Identifire: '056237424-8',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '760592249-3',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '212083206-4',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '198289199-8',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '739219394-5',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '098254779-X',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '153565621-2',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '701691440-2',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '748910239-1',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '572880011-4',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '342808328-8',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '203545672-X',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '930778298-9',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '564938738-9',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '524988351-6',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '497257139-X',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '685132152-1',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '276363930-5',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '056789462-2',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '729542860-7',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '605737783-4',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '635664930-5',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '803687208-0',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '593501024-0',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '053662652-9',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '045876556-2',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '009961607-6',
    seat_class: 'E',
    createdAt: new Date(),
    updatedAT: new Date()
  },
  {
    seat_Identifire: '581258007-3',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '039449873-9',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '655977797-9',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '010321849-1',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '637110800-X',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '146933551-4',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '089755722-0',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '975601531-4',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '206005321-8',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '991866571-8',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '643887716-6',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '970917975-6',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '497840064-3',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '127043776-3',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '838153759-2',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '749634648-9',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '899563719-6',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '900407009-5',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '120009770-X',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '428073956-0',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '810316944-7',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '085905013-0',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '258574027-7',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '682698088-6',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '344157328-5',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '352692179-2',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '270567879-4',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '972967945-2',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '665203525-1',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '600014103-3',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '642171926-0',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '669729251-2',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '981382611-8',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '650317406-3',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '069701220-4',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '259251987-4',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '617665058-5',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '185751500-5',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '624468272-6',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '353014327-8',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '915351151-4',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '401189868-6',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '407855110-6',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '614903318-X',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '250896076-4',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '039851728-2',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '108487099-1',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '215801032-0',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '238411443-3',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '280128422-X',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '824402110-1',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '721097239-0',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '172343595-3',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '415406459-2',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '595997006-6',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '334741022-X',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '358163036-2',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '692706911-9',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '842840669-3',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '843152734-X',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '414268705-0',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '709588564-8',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '249770012-5',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '676244790-2',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '333895110-8',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '903333757-6',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '002596113-6',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '223493928-3',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '359790236-7',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '631385338-5',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '862733247-9',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '941871767-0',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '270421118-3',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  
  {
    seat_Identifire: '840961062-0',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '528728500-0',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '663215892-7',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '492891938-6',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '538496027-2',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '440558545-8',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '221584621-6',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '754001951-4',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '917593741-7',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '003024942-2',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '662132847-8',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '276274308-7',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '865424714-2',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '561630056-X',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '100124750-7',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '786831946-1',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '447097593-1',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '447253853-9',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '942196235-4',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '808014409-5',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '956113638-4',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '631875611-6',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '414792325-9',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '383386324-2',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '086850895-0',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '247302184-8',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '182641200-X',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '938255703-2',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '441610334-4',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '471755912-6',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '196510607-2',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '050069607-1',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '649329704-4',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '384681777-5',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '191206054-X',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '852001375-9',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '429140197-3',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '501608748-2',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '649976546-5',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '510719447-8',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '189362465-X',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '922989962-3',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '708285365-3',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '624930451-7',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '842025629-3',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '933496862-1',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '360829085-0',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '619153430-2',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '006248596-2',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '168103260-0',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '609295348-X',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '865474318-2',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '971707234-5',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '453269772-7',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '497251615-1',
    seat_class: 'H',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '827682360-2',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '931392684-9',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '097934527-8',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '369033106-4',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '156589821-4',
    seat_class: 'A',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '467498063-1',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
       
  },
  {
    seat_Identifire: '100904127-4',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '423033045-6',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '478417418-4',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '244340191-X',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '897287615-1',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '233401692-6',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '022819783-X',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '047092168-4',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '399485493-8',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '299039299-8',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '220200499-8',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '855461491-7',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '740443173-5',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '512557799-5',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '286235056-7',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
       
  },
  {
    seat_Identifire: '794306423-2',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '708681044-4',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '883048740-6',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '049396863-6',
    seat_class: 'I',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '088944088-3',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '035083762-7',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '294795948-5',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '279138568-1',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '639841110-2',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '750005525-0',
    seat_class: 'C',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '210033465-4',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '116105380-8',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '549980655-1',
    seat_class: 'F',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '075656955-9',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '829500586-3',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '801029386-5',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '926486033-9',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '975709076-X',
    seat_class: 'D',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '077398444-5',
    seat_class: 'G',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '229209436-3',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '330529090-0',
    seat_class: 'E',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '991800266-2',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '250057126-2',
    seat_class: 'J',
        createdAt: new Date(),
        updatedAT: new Date()
  },
  {
    seat_Identifire: '599628912-1',
    seat_class: 'B',
        createdAt: new Date(),
        updatedAT: new Date()
  }
   
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
