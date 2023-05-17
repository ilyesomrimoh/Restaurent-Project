import React from 'react'

function OrderBtn({text , colorVar , bgColorVar, handleClick = null ,px, py}) {
    const styles = {
        backgroundColor: `var(${bgColorVar})`,
        color: `var(${colorVar})`,
        padding: '0.59rem',
        paddingTop: `${py === null ? '0.59rem' : py}`,
        paddingBottom: `${py === null ? '0.59rem' : py}`,
        paddingLeft: `${px === null ? '1.125rem' : px}`,
        paddingRight: `${px === null ? '1.125rem' : px}`,
        textAlign: 'center',
        fontSize: '0.88543rem',
        borderRadius: '0.45rem',
        width: 'fit-content',
    
      };
  return (
    <div onClick={handleClick} style={styles} className='font-semibold cursor-pointer'>
        {text}
    </div>
  )
}

export default OrderBtn