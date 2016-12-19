import React from 'react';

export default class Foxconn extends React.Component {
    render() {
       const  projectLists =   [ 
        {projectName:"園區會員管理系統",
         role:"SD/PG",
         language:"java",
         subTitle:"開發智慧園區內部應用系統:",
         projectDeail: ["撰寫與票卷販賣平台串接程式","撰寫會員相關功能", "商品促銷功能模組"]},
         {projectName:"集團差旅核銷系統",
         role:"PG",
         language:"Asp.net ,c#",
         subTitle:"集團內部跨部門合作開發差旅核銷系統:",
         projectDeail:["負責電子化出差表單商業邏輯撰寫","簽核程式串接","維護集團內部航空業務系統"]},
         {projectName:"口腔醫療資訊系統",
         role:"SD/PG",
         language:" Java,scala",
         subTitle:"設計整套口腔醫療系統解決方案:",
         projectDeail:["系統架構師帶領學習系統架構分析建立"," 導入angular 取代一般jquery撰寫模式","撰寫前端component模組化程式"
         ,"撰寫掛號,及預約模組"]},
         {projectName:"醫療健康業務系統",
         role:"SA/SD/PG LEADER",
         language:" Java",
         subTitle:"配合大陸醫療團隊建立預約治療課程管理系統:",
         projectDeail:["管理系統架構,建立程式開發sop",
         "帶領三名同仁以及外包人員,依照SOP撰寫程式",
         "維護系統框架共用邏輯,掌握開發人員進度",
         "將所有內部網路開發環境移出到AWS",
         "導入flyway作為DB Version管理",
         "定期code review其餘同仁程式碼",
         "撰寫測試邏輯",
         "改進程式效能問題"]}
       ]
                            
      return (
          <div>
                <h3>鴻海精密</h3>
                <hr></hr>
                <div className="item active">
                        {/*projectLists.map(function(object, i){
                            const projectDeail = projectLists[i].projectDeail;
                            return <div className="col-sm-4" key={i}>
                                    <div className="fff">
                                        <div className="caption">
                                            <h4>{projectLists[i].projectName}</h4>
                                            <p>{projectLists[i].role}  {projectLists[i].language}</p>
                                            <p>{projectLists[i].subTitle} </p>
                                            <ul className="nav">
                                                <li key={10}>123</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>;
                         })*/}
                        <ul className="thumbnails">
                        <li className="col-sm-6" key={0}>
                                    <div className="fff">
                                        <div className="caption">
                                            <h4>{projectLists[0].projectName}</h4>
                                            <p>{projectLists[0].role}  {projectLists[0].language}</p>
                                            <p>{projectLists[0].subTitle} </p>
                                            <ul className="nav">
                                                <li key={0}>{projectLists[0].projectDeail[0]}</li>
                                                <li key={1}>{projectLists[0].projectDeail[1]}</li>
                                                <li key={2}>{projectLists[0].projectDeail[2]}</li>
                                                <li key={3}>{projectLists[0].projectDeail[3]}</li>
                                            </ul>
                                        </div>
                                    </div>
                          </li>
                        <li className="col-sm-6" key={1}>
                                    <div className="fff">
                                        <div className="caption">
                                            <h4>{projectLists[1].projectName}</h4>
                                            <p>{projectLists[1].role}  {projectLists[1].language}</p>
                                            <p>{projectLists[1].subTitle} </p>
                                            <ul className="nav">
                                                <li key={0}>{projectLists[1].projectDeail[0]}</li>
                                                <li key={1}>{projectLists[1].projectDeail[1]}</li>
                                                <li key={2}>{projectLists[1].projectDeail[2]}</li>
                                                <li key={3}>{projectLists[1].projectDeail[3]}</li>
                                            </ul>
                                        </div>
                                    </div>
                            </li>
                          </ul>
                          <ul className="thumbnails">
                            <li className="col-sm-6" key={2}>
                                        <div className="fff">
                                            <div className="caption">
                                                <h4>{projectLists[2].projectName}</h4>
                                                <p>{projectLists[2].role}  {projectLists[2].language}</p>
                                                <p>{projectLists[2].subTitle} </p>
                                                <ul className="nav">
                                                    <li key={0}>{projectLists[2].projectDeail[0]}</li>
                                                    <li key={1}>{projectLists[2].projectDeail[1]}</li>
                                                    <li key={2}>{projectLists[2].projectDeail[2]}</li>
                                                </ul>
                                            </div>
                                        </div>
                            </li>
                            <li className="col-sm-6" key={3}>
                                        <div className="fff">
                                            <div className="caption">
                                                <h4>{projectLists[3].projectName}</h4>
                                                <p>{projectLists[3].role}  {projectLists[3].language}</p>
                                                <p>{projectLists[3].subTitle} </p>
                                                <ul className="nav">
                                                    <li key={0}>{projectLists[3].projectDeail[0]}</li>
                                                    <li key={1}>{projectLists[3].projectDeail[1]}</li>
                                                    <li key={2}>{projectLists[3].projectDeail[2]}</li>
                                                    <li key={3}>{projectLists[3].projectDeail[3]}</li>
                                                    <li key={4}>{projectLists[3].projectDeail[4]}</li>
                                                    <li key={5}>{projectLists[3].projectDeail[5]}</li>
                                                    <li key={6}>{projectLists[3].projectDeail[6]}</li>
                                                </ul>
                                            </div>
                                        </div>
                            </li>
                          </ul>
                </div>
         </div>
      )
    }
} 


