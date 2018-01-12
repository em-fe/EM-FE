<template>
  <div class="emfe-panel-c">
    <div class="emfe-panel-c-logobox">
      <emfe-upload className="emfe-panel-c" :action="uploadAction" @success="uploadSuccess" :url="headImg"></emfe-upload>
    </div>
    <div class="emfe-panel-c-infobox">
      <div class="emfe-panel-c-infobox-about">
        <span class="emfe-panel-c-infobox-about-texts"><i class="emfe-panel-c-infobox-about-texts-i">{{greeting}}
        </i>，{{showNickName}}</span>
        <span class="emfe-panel-c-infobox-about-father">
          <div class="emfe-panel-c-infobox-member" v-if="openMember===1 || openVip===1">
          <span class="emfe-panel-c-infobox-about-text">
          <img class="emfe-panel-c-infobox-about-novip" :src="memberlogoNoVip" v-if="isVip===2&&openVip===1" @click="renews">
          <img class="emfe-panel-c-infobox-about-img" v-if='!(openMember===2 &&openVip===1&&isVip===2)' :src="memberlogo" @click="freeLevels"></span>
          <a class="emfe-panel-c-infobox-youhui" v-if="isVip===2&&openVip===1&&timeJudge===''">开通会员享优惠 !<i
                  class="emfe-panel-c-infobox-youhui-i"></i></a>
        </div>
        <template v-if="openMember===1 || openVip===1">
          <span v-if="isVip===2&&openVip===1&&timeJudge===1" class="emfe-panel-c-infobox-about-overdue">{{
              memberDeadlines}}到期啦 !<i
                  class="emfe-panel-c-infobox-about-overdue-i"></i>
          </span>
          <emfe-link class="emfe-panel-c-infobox-about-link" :routers="{}" v-if="openVip===1&&isVip===1 || timeJudge===1" @click="renews">续费</emfe-link>
          <!--<span class="emfe-panel-c-infobox-about-text" v-if="(openVip===1&&isVip===2&&openMember===1) || openMember===1&&isVip===2">成长值<em class="emfe-panel-c-infobox-about-text-em">{{ growth }}</em></span>-->
          <!--<span class="emfe-panel-c-infobox-about-text" v-if="openVip===1&&isVip===1 || openMember===1">积分<em class="emfe-panel-c-infobox-about-text-em">{{ integral }}</em></span>-->
        </template>
        </span>
      </div>
      <div class="emfe-panel-c-infobox-info">
        <span class="emfe-panel-c-infobox-info-text">账号 : (+{{code}}){{showPhone}}</span>
        <!-- <emfe-link className="emfe-panel-c" :routers="telRouters">
          <emfe-icon type="shouji1" className="emfe-panel-c"></emfe-icon>
        </emfe-link>
        <emfe-link className="emfe-panel-c" :routers="infoRouters">
          <emfe-icon type="chengwei1" className="emfe-panel-c"></emfe-icon>
        </emfe-link>
        <emfe-link className="emfe-panel-c" :routers="walletRouters">
          <emfe-icon type="zhongzhimima" className="emfe-panel-c"></emfe-icon>
        </emfe-link> -->
      </div>
    </div>
    <div class="emfe-panel-c-orderbox">
      <div class="emfe-panel-c-orderbox-item" @click="pendingPays">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAABGCAYAAAB/h5zrAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAB90RVh0U29mdHdhcmUATWFjcm9tZWRpYSBGaXJld29ya3MgOLVo0ngAAAicSURBVHic7ZttjFRXGcd/587syyxMd9lldndmdmdRLAlgqhFJqxKpSYVqTSQx1kjb0GBj0EZSaYSkxZh+wCoKGJWmaahlWV7UD1WrQlMbUNO0QZPW9QO0UGxh2Hlh3wosu7Mv9x4/3PeZO7PLvDBLl/+XmXtenuf5P895zjn33nNFZL8mERIkCECiQwAIvUToVwBIpFFnNrbrhCnEKBNIkAKEtMr8QuPh9kEeah/g+WSII+kWpqSzh35hdZEgEEghEVKvF7ZKo5fRzzbZImFeWl0kiOh+TUqnwRKEMIWYdKVDgtQlS+lQoLeTRr2lQFg1gGB10xW2L0pweyBjGXx2rJ4d70f4xwfB/IY66JlBkMLQ44qS8ce0EYctDqki2q1KHDC9JhwqXJ2drjRle/gd7CDf3pBhe1eC1U1Xc2iY+NtwIzvOhzk/VmfIdIbMdl62MywqTk85YoSrn8GlwyLtbiLMMSYFQkjbebijkBsN2zmNvike60jxUPsgfiHztbQwKQXdqRB7+1q5MuUzY2prEtIa9tI0BH1k2qGSTt5u76BTMkgbwoXA/pHmeEUIt9dtOU63Sku2D8n6tiG+35ligX9qWrLZGJ7ysyfezpFLLUiM0WoFgZzw5pDLNtXqqgdQdHZr0pkYQrgunRocXncKN/oYWN10lSe73HlbLE5dC7DjQpSTV+blMMqX72BNOY4h7mAhQcQOGKRd48E5a0uXZ4XudsP7toauwDhPxJKsab5cMtlsvDLcyM4LYc5n6rL5YbFE4sogOzud059eFTtgT2Q5ueAUZk/PLpcEa6b4XjTNhvYBamaQt8ViUgpeSIV4pq+NUVVxG2yEVFiRMJAzs+t/RdcBTUrh9lJWwHM6ASjAN9sG2VJk3haL/ska9sTbebG/GY3cdRnwtNkqEiC6elRpr8bGUmXPYVZ+OJeRu24b4cmuBMvnjVWcZD6cGg3w9IUIJ6/Md+59AHtQiuysNesX9Tgmsjzrrlm/KDDOts4kayuQt8Xir4NN/DweJjFRC7hHqRU8c/dh8BOLelTpHsXZmxFoUDS+G0nzSKS/onlbLDKawv5UiOeSrYyqinv/ZITd3iKD+GiPJq3NiN7MqlSAr4WG2NKZorVm8sYyKQL9kzXsvtjOn/qb0RzLVU6Of6RHlTmbDwl3Nl5je6yPZVXM22LRO9LA0/EovSMNjs2WY8la3KNK56QVqZ3gB7EUX2kZzr/FvAkggaNDTeyKh0kZ+W5CLD6oSiQ0+DU2hS+xMdxPvaJVx9IKIKMp7Eu28ptUiIymr+/iYwc1uW7hEFtjSUI3Qd4Wi+RELbvjYY4ONSHeeutt+cn5o9W26Yah91oDQp59c/atQRWGUm0DqoFbpOcK5iRpfzmEyMS7yL8fQV58B9Qy32Y2taJ8ag3izvso8ETuulAyadl3Bu3gU4jwYpS134LA/HLYpUOdQsZPo504hLh8CWXNxrKILZ308YM64Qd/BIqvHDa5IJZ+BhmKob28D1bcCy2RkmWWnNOy7yziE3dXhLAJccdqEIqePmVA6ROZlBAIlsGUAvDVQG09TJTnjm9Ozt5zknRZlqySMZxGO/bctEueduII4r3/onzp2xBsLlrdrCCt/WEPciKD8sWH9fzNh6lxtDdeQvvzXpT1PyxaX/VJj48h0++jfHUzYtlnp22uCIH28vMlqax+TkvjKY3fjLCEkQ/wemEIgK/Wu/w6UH3SWdBe2Y/6q01ox/ZVTMesI81gn/470FcxFdXP6Swo930H+c5JxJKVFdMx60hzWwti5ZcrqqL6w7u2HurnIU+/AePTbDMz15Bn/lXSGg2zIdKKD2XNRrS/PIN66vXp2/trUNY9VpLK6pMGxPLP4YstRabes5ewLGgv/RqxfBXK578O85pK0jcrSAMQbEYUGraKD7EwWjJhmA05XQXcIl0UhAJj+U8ClgXqJExkoK6hLOJKJi06liB7T5T/KagD8j/H9TOn0SVlkVfyuyyZeBft0FOIUCfiji+Av/QbApf8vjPI3uOIT9+Lcs+Gssgsyws8mfwf8p+/Q8bfhsnxctilQyjQ3I6yYi1ixRrK9dz71lvLuYJbpOcKlNOjgWrbcEPRO9KA+PhhVa4LDbE5mvpQH7Tpn6zhZ/EwRwcXIJYdVqV5FPKR8CU2tH34jlR1p0PsS7Qyah6pMkmbDx9jdeM83pnkngWz59BrMZDAsaEmdsfDJM3Dc+YhwWWHVc91emVwhG2xBEsbbr5jkqdHA/z4fJQ3R+a5z4CDfjrYIp19WFzqU/u60BBbOpI39CB7seifrOGXF9v544B+IBbw/oglX6SdTgj6VDZF0jzQVtlPForFhBS8kGxlX9LOWyD3pL/5SdOyI6p0ecPLQ0aHWP04j3fMrnx/dbiRXfEwF8brvEkWHN54NPCCgLuCIzwR62NxGT5DKhanRwP89EKEf4/M9wyQC1mp6470TEgb8AnJ/aFBHo2mb2i+D0/5+cXFMC8ONKNlzUEueMxR5n/vSGejgBOCPpVN0TQPtg7M6NPCYjEpBYfSC3k22cZV1ecdXa8hnV2HGWnITyzPZJAtbHFDhq0dCVY1lv/R0avDjey6aOStiTx25Nju4Qx7eHtFeZrc9vLqqsarbO1IlCXfz43V85N4hNcv258Ze9pUYChbcJDPXacLCXbCa+gYvz4h+UZokM0dKYI+9Tpo6hie8rO3r43fD7Sgml+gzMS26bLLFWkvEk5yMDMvZxmwwD/Fo9E094cG8c0g31Up6Ekv5NmEkbd5nFoozfKS9Yx0lsHTkpsJzHwPZNjaWTjfX7scZGc8wrlMvV043VJUQGchZxTchuZVOJMIeBhy94IrbOtMEKuzHx6eG6tnZzzCa5eDhW3IV2aWk9WXPG3xuMsqKDy7rlC/PDJqhOSBtgHWtw7QnQ7x234jb70IzMT54O0cr3ID/wcV4Ju7/7DzbgAAAABJRU5ErkJggg==" class="emfe-panel-c-orderbox-img">
        <p class="emfe-panel-c-orderbox-text">待支付（{{pendingPaymentNum}}）</p>
      </div>
      <div class="emfe-panel-c-orderbox-item" @click="pendingShipments">
        <img src="data:image/gif;base64,R0lGODlhPABGANUAAJJt/cfK/qyY/Uuu/Y29/sG6/nO3/aeQ/bis/pt7/ajD/qzE/mS0/c7F/8fF/p+D/bSk/n+6/qGF/bvH/lqx/ZvA/szM/5Vz/b20/rTG/qWM/Wq1/ZO+/pR7/66c/cO9/k+v/Xi4/YS7/l2y/f///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHACQALAAAAAA8AEYAAAb/QJJwSCwaj6RKBclsOp/GSGAaEEGv2CZjYul6J5usGDtQeM9eBWjMRhLQcC+nTScZAvG8JRCqZykZeoIWGRR+TxWDihZLh0dSi4tVjkNbkZcWYIdlmJ0WCgN0b56kc2J3pKl7BleAqq+Ehk2JsLWNUXi1upOVXLq/XZpmwMRdC8XIycrLzM3OXg4Y0tPU0g7PcQ4aABcJ3t/gCQAa19heCRIfih8SCeXYAgm5iw8C5h8XGJgFF+rPGho8HTjwDAOABBcedEFwoaHDhw8B6GvmDUKBAl0cXNzIkSMEb80Yvuvk4AICZgc8vPIQcNmDk6oQKHQJE46DmyM9TFyYgNnL5zzbAADwZ+EBhDMIetLMg3OkUaRKlf289NRLUp81FyLYyvVdVZ5Y0Wh4QLas16NWoyabGsnDBYxgl2IS8DauVJgD8+o9MNICXXVX5XoYTLhwXwsQbgZWJgFtKggSmHl4MM/TA5XLHCQg58nBAXfN2B0MR5o0gAdEQ1dbzTq1udewY8ueHWcY7UELSGzwdRuOpiEiKve2coTW7VtIXMnOMOIKKnN8xoxyZooNp2UL1vjZjew3peDAiFMiYlwV8vFElHtijr7J80jR2z+ZPqi6/CcgbMfJfl8MdzTe9SdGcFSIJ2AbSrQXBAA7" class="emfe-panel-c-orderbox-img">
        <p class="emfe-panel-c-orderbox-text">待收货（{{pendingReceiveNum}}）</p>
      </div>
      <div class="emfe-panel-c-orderbox-item" @click="pendingShipments">
        <img src="data:image/gif;base64,R0lGODlhPABGAMQAADqu/7vj/33K/1G2/qTZ/2zD/5LR/kSz/7Xg/1m7/63d/4zQ/5vW/3rH/mK9/qbb/0q1/5XU/3XG/YTN/z+w/2nA/f///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHABYALAAAAAA8AEYAAAX/oCWOZGmelmGgbOu+phTMQQPfeOsoNK04uSAOwugZAwyIcImaHJ+BCXNqKSCgUESBmhsQsODAI8F9GcLowKp8kqXfNrZo964HfmWifY9UMp18gVJBVoGGAVo3XoeMYgMuZ42SazGSljRxczyXnHhFnKAzn6GkpaanqKmhCA4Arq+wsbAJX6oOFAIquru8uhMQEFepAAKBDACjpwALgQrIqsvNz8PMfM7JptHW06jae87V3eF7FQAFm9njewQJFA3CpN5vD/BqEAfql/Jp+EcTFAPi5QtDYeAxgXsKPiEAAKGdAw4mSAQUgKHDOhMGaNQozGKofYc8ggJpSCQnbwYE3Cyo9wTBAgERepi8pOcBhFcHsPVgQOHVgE0zQQErQgAYyxkIAD4IEIFCghlBLzGMhGSZgqtYFQgAsHTGBAA8olqKAKDWHVmxepCtpfOSswI0tnY1cizcraOkJACI2AoulL4CEgCgmOoXAAiEn0g4AGDAQFWQI0ueTJlR28pYGFiggxkMnhENOkPJVIKqaEooBsyl/OARjEKSEwVJfGrQEj2nGBwowxnUZznvOJGWI8K0IdTESagu6To5igp4sSCo4BwGbSi2q8O4LEq7kATofJDxvkQCPAnkuahwHgIAOw==" class="emfe-panel-c-orderbox-img">
        <p class="emfe-panel-c-orderbox-text">待发货（{{pendingShipmentNum}}）</p>
      </div>
      <div class="emfe-panel-c-orderbox-item" @click="pendingAudits">
        <img src="data:image/gif;base64,R0lGODlhPABGAOYAABPOZq302VrilTyy8jjYfpLyuYHb4mTK6B7RbX7srK35y1TgkZ3q31bA8W7ooqX3xb3+1inUdErdihDOa3XT5qfw3E28743i4Ifvspz1wLT7zz3agjLXemrmnyHWa7X/1q3v3km49Vjhk2DI6YXd5XjqqG3O65bzvBrQa7X42LX3zqr4yWXlnCTTcYPtr0G194zwtTzZgXvW6KD2w3DR5nPppZzr3U/fjlS/8l7H6a333pTl4ULbhWHG74zh4Ize5pTyu27Q5mPmlEK371rE7P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHAEUALAAAAAA8AEYAAAf/gEWCg4SFhocvOzuHjI2Oj48yEJMQMpCXmJc9AZSUAT2ZoaIhDJ2mEAwhoquOJKevECSss4MmKbCwKSa0og0VuMAQFTi8kInByBCLxYySyc+WzIObz9UQn8yk1tuoqrOu3OGyorbh5hC6mL7n7MLEjcft8suGzvL3lYTU+PzYpfwAJ/0LSLCgwYMIT2kQ0AKAw4cQI0aMwELDQQURUCxwUKOjx48gPTqQACCGxYIiUJxghwGAA4MIFsiLQcCgS3kLItisgVNnQQA8YWmowQOBwxY8SpyklHMnrA4oAHAQ0KGDiAgAEASd1PTnVkoaYgCQMONUBh4AeJzMkMCpKQIo/1yAPZUAwIaEEICaEgEAxqQZBBC8cgGARUK9lDIUnnQCRQsMsPiWPYh40g0EFhUgiKAAlwYUIhBWhqBxkgAUD4JJaCF6q2K5EDIAQVYCwArKW2EAWJmsA4aWvL1S0h08GAIBxHEnBgA7mAKgtVO7nQS6N4AHl1t3koA52AwUEj7LVE6pAIAOwAq0aKFAAIAM2jvdADDbFIwSaCM8qBs6PlgOCPhFSV1SOaBBSwBMRl4nCnAAwAK3TfKARdhJhQAC8FH20ivulcRCCSWwQAAAKBj2QAsIFBdQTLisICJEBHTQ2SQrZCQgQSmp+IoGS5miwIjNAaQBVhuBFGQwGmyAgoVBCzU00TYR4iXllOzYQGU4NhRBxC1XJhNAA4RQ0GUwNDBywZinXPCIBb+gWcEQmBzA5ZQpjLCKAVNGw8oAVh6UJTNEcBLQl9IMQgNAQRRqyJnt+KAoI2ya8+ajjshpTQo5UHoJnsnoqeklfcLy56ehNCBoJwFYQOosh1KS6Kq8XKDmo4EAADs=" class="emfe-panel-c-orderbox-img">
        <p class="emfe-panel-c-orderbox-text">待审核（{{pendingAuditNum}}）</p>
      </div>
    </div>
    <div class="emfe-panel-c-border"></div>
    <div class="emfe-panel-c-others" :class="{ 'emfe-panel-c-othersTwo': (!(openVip===1&&isVip===1 ||
      openMember===1)&& !((openVip===1&&isVip===2&&openMember===1) ||
      openMember===1&&isVip===2)) }">
      <span class="emfe-panel-c-others-text">
        <img src="data:image/gif;base64,R0lGODlhDwALAMQAACTv4SXW6SXF7yin+STn5CP+3CXM7STf5ie09CP43ibc6CjN7Se+8Sis+CjU6ifG7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHABAALAAAAAAPAAsAAAVQoEIQkDOeqJIUxXKwcPys7VsQLAGwB+2yj1ljV1BAVr9CAoEIwCDHgsHGaDQQNgBxygo8GgZcISq1EQINAk3N4rIStjbNHYMJAgeSCYVyhAAAOw==" class="emfe-panel-c-others-text-img">
        优惠卷<em class="emfe-panel-c-others-text-em">：{{ couponNum }}张</em></span>
      <span class="emfe-panel-c-others-text" v-if="openVip===1&&isVip===1 || openMember===1">
        <img src="data:image/gif;base64,R0lGODlhDgAOAMQAAJmlrDKh7vipbnGkxcqnjCGg+bmml1Wj196of/+paoWluManjiGh+ECi5Sih9eaoeq+mntSnhd2ogDyh6Eai4fapcFij1bSmmoGku////wAAAAAAAAAAAAAAAAAAAAAAACH5BAEHABkALAAAAAAOAA4AAAVeYCZmACIICDCOg5C8sDCwcEIQ9Zy5r9BMvISAVFMUCphgKWGwOI5Hh+WSQLwiDgY0GqkxtVvqy/qibBswCQA22QZgKp7jAIFYGD3R4PWo9RM6GS1eCRWBIwASJ2orIQA7" class="emfe-panel-c-others-text-img">
        积&nbsp;&nbsp;&nbsp;分<em class="emfe-panel-c-others-text-em">：{{ integral }}</em></span>
      <span class="emfe-panel-c-others-text">
        <img src="data:image/gif;base64,R0lGODlhDQAOAMQAAE2m3vq4d5CttrOxoeG2hiGh+XGqyM20ku+3fauwpjOj7sazllqn12epz9a1jZyur+a2g/+5dLyynJWutHqrw6Wvqve4ed61jMKymVKm3Daj7P///wAAAAAAAAAAAAAAACH5BAEHABsALAAAAAANAA4AAAVe4CYyhBUhjqiqTuRWa8zMsSqYriXEh+u7B5XEBSFEHMaIZNPwLTQVBcbXWPgclAKl5VrgIhNGgTHxfSMCQCEj+EF8hERhkIxAHr+AIPB7bHo/P0EiBhIQJhYQEgYiIQA7" class="emfe-panel-c-others-text-img">
        &nbsp;余&nbsp;&nbsp;&nbsp;额<em class="emfe-panel-c-others-text-em">：￥{{ balance }}</em></span>
      <span class="emfe-panel-c-others-text" v-if="(openVip===1&&isVip===2&&openMember===1) ||
      openMember===1&&isVip===2">
        <img src="data:image/gif;base64,R0lGODlhDQAOAMQAACD4hSG52CDxjiDioyHJwyDqmCH/hCD1iiG/0SHLwSDtkyDomiG90yHbrCG33CDEyv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHABAALAAAAAANAA4AAAU5IAGMCGSe5qgmZqMyqhocMaDUOADlsWAOKpfqgIIgDofFYvAopnxOFAAaTSmqJ0ABm9pytVzH1BkCADs=" class="emfe-panel-c-others-text-img">
        成长值<em class="emfe-panel-c-others-text-em">：{{ growth }}</em></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmfePanelC',
  data() {
    return {
      logo: '',
      isguoqi: '',
    };
  },
  props: {
    headImg: {
      type: String,
      required: true,
    },
    memberlogo: {
      type: String,
      required: true,
    },
    memberlogoNoVip: {
      type: String,
      required: true,
    },
    nickName: {
      type: String,
      required: true,
    },
    levelName: {
      type: String,
      required: true,
    },
    code: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    isMember: {
      type: Number,
      required: true,
    },
    openMember: {
      type: Number,
      requireed: true,
    },
    isVip: {
      type: Number,
      required: true,
    },
    openVip: {
      type: Number,
      required: true,
    },
    memberDeadline: {
      type: String,
      required: true,
    },
    growth: {
      type: Number,
      required: true,
    },
    integral: {
      type: Number,
      required: true,
    },
    couponNum: {
      type: Number,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    pendingPaymentNum: {
      type: Number,
      required: true,
    },
    pendingReceiveNum: {
      type: Number,
      required: true,
    },
    pendingAuditNum: {
      type: Number,
      required: true,
    },
    pendingShipmentNum: {
      type: Number,
      required: true,
    },
    telRouters: {
      type: Object,
      required: true,
    },
    infoRouters: {
      type: Object,
      required: true,
    },
    walletRouters: {
      type: Object,
      required: true,
    },
    uploadAction: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggle(status) {
      this.$emit('switch-toogle', status);
    },
    iconClick(index) {
      this.$emit('icon-click', index);
    },
    uploadSuccess(res) {
      this.$emit('uploadSuccess', res);
    },
    pendingPays() {
      this.$emit('pendingPay');
    },
    pendingAudits() {
      this.$emit('pendingAudit');
    },
    pendingShipments() {
      this.$emit('pendingShipment');
    },
    renews() {
      this.$emit('renew');
    },
    freeLevels() {
      this.$emit('freeLevel');
    },
  },
  computed: {
    classList() {
      return [
        {
          [`${this.className}-panel-c`]: !!this.className,
        },
      ];
    },
    boxName() {
      return [
        {
          [`${this.className}-panel-c-box`]: !!this.className,
        },
      ];
    },
    leftName() {
      return [
        {
          [`${this.className}-panel-c-box-left`]: !!this.className,
        },
      ];
    },
    rightName() {
      return [
        {
          [`${this.className}-panel-c-box-right`]: !!this.className,
        },
      ];
    },
    showPhone() {
      return this.phone.toString().replace(/^(\d{3})\d{4}(\d+)/, '$1****$2');
    },
    memberDeadlines() {
      return this.memberDeadline.slice(0, 10);
    },
    timeJudge() {
      const myDate = new Date();
      const endTime =
          `${myDate.getFullYear()}-${(myDate.getMonth() + 1)}-${myDate.getDate()} ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`;
      if (this.memberDeadline === '') {
        return '';
      } else if (this.memberDeadline !== '' && new Date(endTime).getTime() > new Date(this.memberDeadline).getTime()) {
        return 1;
      }
      return 2;
    },
    showNickName() {
      if (this.nickName.length > 5) {
        return `${this.nickName.substring(5, 0)}...`;
      }
      return this.nickName;
    },
    greeting() {
      const myDate = new Date();
      const myhours = myDate.getHours();
      if (myhours >= 0 && myhours < 12) {
        return '早上好';
      } else if (myhours >= 12 && myhours < 13) {
        return '中午好';
      } else if (myhours >= 13 && myhours < 18) {
        return '下午好';
      }
      return '晚上好';
    },
  },
};
</script>
