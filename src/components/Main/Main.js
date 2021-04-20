import React from 'react'
import classes from './Main.module.scss'

function Main() {
  return <main className={classes.main}>
    <div className={classes.mainHeader}>main header</div>
    <div className={classes.breadcrumbs}> breadcrumbs</div>
    <div className={classes.mainContent}>6 СИГМ как внедрить и понять философию успеха и гениальности
      Как производство может увеличить выпуск продукции на 50 %, 100%, 200% и даже 500% ? С помощью психокатарсиса, мы объясним вам как работает технология основанная на 6 СИГМАХ.
      В данном видео ролике за основу материала психокатарсиса выбран фильм «Ford против Ferrari». В котором рассмотрен такой аспект:
      Как снизилась платежеспособность и за холостого хода от потери заказов полученных от клиентов в отделе продаж, по причине согласования этих заказов с производством, а иначе говоря разница между потенциальными заказами приятыми в отделе продаж и реально запущенными в производство. А точнее, в каком месте производства товаров и услуг возникает пробуксовка, почему производство не может удовлетворить разнообразие спроса клиентов.</div>

  </main>
}

export default Main
