// import Chart from "../../components/chart/Chart";
import FeaturedInfo from "./FeaturedInfo";
import { userData } from "./dummyData";
import WidgetSm from "../admin/WidgetSm";
import WidgetLg from "../admin/WidgetLg";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Chart from "./Chart";

export default function AdHome() {
  return (
    <>
      <Topbar />

      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>

        <div className="col-md-10">
          <div className="home">
            <FeaturedInfo />
            <Chart
              data={userData}
              title="User Analytics"
              grid
              dataKey="Active User"
            />
            <div className="homeWidgets">
              {/* <WidgetSm />
              <WidgetLg /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
