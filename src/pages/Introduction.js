import React from 'react';
import { Link } from "react-router";



export default class Introduction extends React.Component {
    render() {
      return (
         <div className="profile-content">
             <div className="article">
                <h3>簡介</h3>
                <p>
                   <i className="glyphicon glyphicon-map-marker"></i>Kaohsiung/Taiwan   
                   <i className="glyphicon glyphicon-envelope"></i>ch81213@gmail.com   
                   <i className="glyphicon glyphicon-gift"></i>1987/06/26   
                </p>
                <hr></hr>
                <div className="article-content">
                    <p> 你好，我在IT領域約有四至五年左右的工作經驗，
                        與人團隊合作及幫助別人解決問題，是我的特色， 也是我在讀書時期磨練出來的技能.
                    </p>
                    <p> 在大學時代我曾擔任過學會會長，舉辦各式各樣的活動也練就一身解決各式各樣的問題能力.
                        這讓我在使用者需求訪談、使用者情境推演及撰寫規格書需求書上更得心應手，由於與不同人合作的經驗，在與公司同事相處之間也非常的很融洽，在跨部門合作上也獲得相當的成功。
                    </p>
                    <p> 因為從小有著家庭的經濟壓力，所以做過許多工作，如早餐店店員、石油鋼鐵廠焊接工、禮儀接待生、家教及宅急便貨運，所以在壓力處理方面，我相信我的抗壓力比一般人高，我也非常珍惜學習與成長的機會.
                            積極參加許多的研討會 及下班的自修課程 ，都是為了讓自己獲得更多知識與成長.並且透過與同事分享的學習經驗、討論及互相學習教導，有時也可以達到整個團隊的能力提升，並加快工作效率。
                    </p>
                    <hr></hr>
                    <h3>自我期許</h3>
                    <blockquote className="hero">
                        <p>  可以完成更多使自己跟公司都驕傲的產品 ，挑戰以及學習新的事物</p>
                        <p>  並且讓自己成為被大家信任且值得依靠的人，</p>
                        <small>希望貴公司有機會可以讓我貢獻自己的能力，跟著公司一起成長發展。 </small>
                    </blockquote>	
                </div>
        </div>
        </div>
      )
    }
} 

