

import React from 'react'

function Footer ()  {
    const data = new Date()
    const getYear = data.getFullYear()
    return (
        <div className="footer">
          powered by Mohamed Elsayed  {getYear}
        </div>
    )
}

export default Footer

