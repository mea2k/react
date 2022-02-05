

const Col = ({ style, children }) => (
    <div className={`col heap__item widgets__col text_black_yes ${style ? style : ''}`}>
            {children}
    </div>
)

export default Col;