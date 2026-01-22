export const SUBJECTS = {
  MAT:{ name:"Mathematics II", faculty:"Resmi R Nair", code:"2002", type:"Theory" },
  PHY:{ name:"Applied Physics II", faculty:"Bincy Annie Philip", code:"2003", type:"Theory" },
  EVS:{ name:"Environmental Science", faculty:"Sreeusha N", code:"2001", type:"Theory" },
  FEE:{ name:"Fundamentals of Electrical & Electronics Engineering", faculty:"Aiswarya P", code:"2031", type:"Theory" },
  PSP:{ name:"Problem Solving & Programming", faculty:"Preeja Prakash", code:"2131", type:"Theory" },

  CS:{ name:"Communication Skills in English", faculty:"Soorya S", code:"2008", type:"Block" },

  PSP_LAB:{
    name:"PSP Lab / Engineering Workshop",
    faculty:"Preeja Prakash / Binju K Babu",
    code:"2139 / 2009",
    type:"Lab",
    batch:"Split"
  },

  FEE_LAB:{ name:"FEE Lab", faculty:"Sunila Susan Thomas & Manjusree S", code:"2039", type:"Lab" },
  PHY_LAB:{ name:"Applied Physics Lab", faculty:"Meethu Elsa Mathew", code:"2006", type:"Lab" }
};

export const TIMETABLE = {
  Monday:[
    {t:"09:00–12:10",s:"CS"},
    {lunch:"12:10–12:50"},
    {t:"12:50–01:50",s:"MAT"},
    {t:"01:50–02:50",s:"PHY"},
    {break:"02:50–03:10"},
    {t:"03:10–04:00",s:"EVS"}
  ],
  Tuesday:[
    {t:"09:00–12:10",s:"PSP_LAB"},
    {lunch:"12:10–12:50"},
    {t:"12:50–01:50",s:"FEE"},
    {t:"01:50–02:50",s:"PHY"},
    {break:"02:50–03:10"},
    {t:"03:10–04:00",s:"MAT"}
  ],
  Wednesday:[
    {t:"09:00–12:10",s:"PSP_LAB"},
    {lunch:"12:10–12:50"},
    {t:"12:50–04:00",s:"FEE_LAB"}
  ],
  Thursday:[
    {t:"09:00–10:00",s:"PSP"},
    {break:"10:00–10:10"},
    {t:"10:10–11:10",s:"MAT"},
    {t:"11:10–12:10",s:"FEE"},
    {lunch:"12:10–12:50"},
    {t:"12:50–01:50",s:"EVS"},
    {t:"01:50–04:00",s:"PHY_LAB"}
  ],
  Friday:[
    {t:"09:00–10:00",s:"FEE"},
    {break:"10:00–10:10"},
    {t:"10:10–12:10",s:"PSP"},
    {lunch:"12:10–01:50"},
    {t:"01:50–02:40",s:"MAT"},
    {t:"02:40–03:20",s:"EVS"},
    {t:"03:20–04:00",s:"PHY"}
  ]
};
