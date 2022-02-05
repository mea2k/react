import RowsLayout from './Layouts/RowsLayout';
import TopRow from './Layouts/TopRow';
import MainRow from './Layouts/MainRow';
import LastRow from './Layouts/LastRow';
import RowGap from './components/public/RowGap';
import NotifLayout from './Layouts/NotifLayout';
import SearchLayout from './Layouts/SearchLayout';
import TopBlock from './Layouts/TopBlock';
import WidgetsLayout from './Layouts/WidgetsLayout';
import MediaLayout from './Layouts/MediaLayout';

import Row from './components/public/Row';
import Col from './components/public/Col';

import UserInfo from './components/cards/UserInfo';
import WeatherCard from './components/cards/Weather';
import City from './components/headlines/City';
import TopNews from './components/TopNews';
import MenuBar from './components/headlines/MenuBar';
import Settings from './components/headlines/Settings';
import Search from './components/Search';


import WeatherWidget from './components/widgets/Weather';
import Region from './components/widgets/Region';
import Programme from './components/widgets/Programme';
import Services from './components/widgets/Services';
import Afisha from './components/widgets/Afisha';

import Zen from './components/media/Zen';
import AfishaMedia from './components/media/Afisha';
import NewsMedia from './components/media/News';
import MediaToggleLine from './components/media/MediaToggleLine';

import './main.css';

import './icons.css';



import { NewsData } from './const/news/News';
import { StocksData } from './const/news/Stocks';
import { WeatherDataFull, WeatherDataShort } from './const/Weather';
import { SearchServiceLinks } from './const/search/SearchServiceLinks';
import { SearchFormData } from './const/search/SearchFormData';
import { SearchExampleString } from './const/search/SearchExampleString';
import { ServiceWidgetData } from './const/widgets/ServiceWidget';
import { RegionWidgetData } from './const/widgets/RegionWidget';
import { ProgrammeWidgetData } from './const/widgets/ProgrammeWidget';
import { AfishaWidgetData } from './const/widgets/AfishaWidget';
import { ZenMediaData } from './const/media/ZenMedia';
import { AfishaMediaData } from './const/media/AfishaMedia';
import { NewsMediaData } from './const/media/NewsMedia';
import Footer from './components/Footer';
import { LinksData } from './const/footer/LinksData';


const city = 'Вашингтон';
const date = new Date("July 30, 2019 20:51:00");

const App = () => {
    return (
        <div className="rows-wrapper">
            <NotifLayout>
                <UserInfo />
                <WeatherCard img={WeatherDataShort.img} info={WeatherDataShort.info} link={WeatherDataShort.link} />
            </NotifLayout>

            <RowsLayout>
                <TopRow>
                    <City city={city} />
                    <MenuBar>
                        <Settings />
                    </MenuBar>
                </TopRow>

                <MainRow>
                    <TopBlock>
                        <TopNews date={date} newsItems={NewsData} stockings={StocksData} />
                    </TopBlock>
                    <SearchLayout>
                        <Search formData={SearchFormData} services={SearchServiceLinks} example={SearchExampleString} />
                    </SearchLayout>

                    <WidgetsLayout>
                        <Row>
                            <Col>
                                <WeatherWidget {...WeatherDataFull} />
                                <Services {...ServiceWidgetData} />
                            </Col>
                            <Col>
                                <Region {...RegionWidgetData} />
                                <Programme {...ProgrammeWidgetData} />
                            </Col>
                            <Col>
                                <Afisha {...AfishaWidgetData} />
                            </Col>
                        </Row>
                    </WidgetsLayout>
                </MainRow>

                <RowGap />

                <LastRow>
                    <MediaLayout>
                        <Zen {...ZenMediaData} />
                        <AfishaMedia {...AfishaMediaData} />
                        <NewsMedia {...NewsMediaData} />
                    </MediaLayout>

                    <MediaToggleLine />

                    <Footer data={LinksData} />

                </LastRow>

            </RowsLayout>
        </div>

    );
}





export default App;
