function Tabs({ filterCategory, tabsData },props) {
  return (
    <>

      <div className="text-center mb-5">
        {
          tabsData.map((category, index) => {
            return (
              <button type="button" className={`btn btn-outline-primary mx-2 text-capitalize portfolio-btn ${props.isDarkMode ? 'text-dark' : 'text-white'}`} onClick={() => filterCategory(category)} key={index}>{category}</button>
            )
          })
        }


      </div>
    </>
  )
}

export default Tabs;