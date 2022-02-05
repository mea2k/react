
import './main.css';

const NewsWrapper = ({ id, children, ...rest }) => (
    <div className="i-bem widget widget_mode_plain widget_id_topnews widget_name_topnews widgets__item b-widget-fixed" data-bem="{&quot;widget&quot;:{&quot;id&quot;:&quot;_topnews&quot;,&quot;showPrefs&quot;:true}}" id="wd-wrapper-_topnews">
        <div id={id} key={id} className="b-widget-data b-wrapper">
            {children}
        </div>
    </div>
)


export default NewsWrapper;