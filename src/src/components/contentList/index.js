import React, { Component } from "react"
import ListItem from '../listItem/'

const List = (data) => {
    const res = data.res
    if (!res) {
        return (
            <p>赶紧来查一发吧少年</p>
        )
    }

    const basic = [
        {
            name: '城市',
            value: res.basic.location
        },
        {
            name: '纬度',
            value: res.basic.lon
        },
        {
            name: '经度',
            value: res.basic.lat
        },
        {
            name: '天气更新时间',
            value: res.basic.loc
        }
    ]
    const list0 = res.daily_forecast[0]
    const list1 = res.daily_forecast[1]
    const list2 = res.daily_forecast[2]
    const daily_forecast0 = [
        {
            name: '预报日期',
            value: list0.date
        },
        {
            name: '日出时间',
            value: list0.sr
        },
        {
            name: '日落时间',
            value: list0.ss
        },
        {
            name: '最高温度',
            value: list0.tmp_max
        },
        {
            name: '最低温度',
            value: list0.tmp_min
        },
        {
            name: '白天天气状况描述',
            value: list0.scond_txt_d
        },
        {
            name: '晚间天气状况描述',
            value: list0.cond_txt_n
        },
        {
            name: '风向',
            value: list0.swind_dir
        },
        {
            name: '降水概率',
            value: list0.pop
        },
        {
            name: '紫外线强度指数',
            value: list0.uv_index
        }
    ]

    if (Object.keys(res).length) {
        return (
            <div>
                <div className="wrapper">
                    <div className="basic-info">
                        {basic.map(v => <ListItem data={v} key={v.name} />)}
                    </div>
                    <div className="daily_forecast">
                        {daily_forecast0.map(v => <ListItem data={v} key={v.name} />)}
                    </div>
                </div>
                {/* <div className="wrapper">
                    <div className="basic-info">
                        {basic.map(v => <ListItem data={v} key={v.name} />)}
                    </div>
                    <div className="daily_forecast">
                        {daily_forecast1.map(v => <ListItem data={v} key={v.name} />)}
                    </div>
                </div>
                <div className="wrapper">
                    <div className="basic-info">
                        {basic.map(v => <ListItem data={v} key={v.name} />)}
                    </div>
                    <div className="daily_forecast">
                        {daily_forecast2.map(v => <ListItem data={v} key={v.name} />)}
                    </div>
                </div> */}
            </div>
        )
    }
}

export default List