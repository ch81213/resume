import React from 'react';

export default class Mitac extends React.Component {
    render() {
      const  projectLists =   [ 
        {projectName:"食品製造ERP系統",
         role:"SD/PG",
         language:"java",
         subTitle:"配合食品業者撰寫客製化erp系統:",
         projectDeail: ["負責製造單據模組,工單,傳令單邏輯撰寫","參與需求訪談,客製化業者單據轉換需求","負責成本計算模組,各項成本計算,結報,報表"]},
         {projectName:"政府食品履歷專案",
         role:"SD/PG",
         language:"java",
         subTitle:"配合食品業者撰寫檢驗以及食品來源追朔系統:",
         projectDeail:["與政府機關系統串接,上傳檢驗資料","檢驗流程的簽核資料上傳,前端頁面資料搜尋","手機端的api建立"]},
         {projectName:"醫療健康照護專案",
         role:"SA/SD/PG",
         language:" Java,android",
         subTitle:"與鴻海和Android團隊配合建立內部醫療照護系統:",
         projectDeail:["撰寫api讓android 團隊 跟鴻海團隊互相資料轉換","撰寫及時掛號以及會員註冊android程式"]},
         {projectName:"連鎖店面內部系統",
         role:"SD/PG",
         language:" Java",
         subTitle:"網路行銷管道建立與貨運業者以及銀行業資料串接:",
         projectDeail:["配合串接貨運業者出貨單列印,收貨驗收,出貨通知","信用卡系統串接,匯款帳戶建立和atm轉帳號碼建立"]}
       ]
                            
      return (
          <div>
                <h3>聯華神通</h3>
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
                          <hr/>
                          <ul className="thumbnails">
                            <li className="col-sm-6" key={2}>
                                        <div className="fff">
                                            <div className="caption">
                                                <h4>{projectLists[2].projectName}</h4>
                                                <p>{projectLists[2].role}  {projectLists[1].language}</p>
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
                                                <p>{projectLists[3].role}  {projectLists[1].language}</p>
                                                <p>{projectLists[3].subTitle} </p>
                                                <ul className="nav">
                                                    <li key={0}>{projectLists[3].projectDeail[0]}</li>
                                                    <li key={1}>{projectLists[3].projectDeail[1]}</li>
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
                                                <p>{projectLists[2].role}  {projectLists[1].language}</p>
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
                                                <p>{projectLists[3].role}  {projectLists[1].language}</p>
                                                <p>{projectLists[3].subTitle} </p>
                                                <ul className="nav">
                                                    <li key={0}>{projectLists[3].projectDeail[0]}</li>
                                                    <li key={1}>{projectLists[3].projectDeail[1]}</li>
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


