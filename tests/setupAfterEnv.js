const Adapter = require("enzyme-adapter-react-16");

import "@testing-library/jest-dom/extend-expect";

require("enzyme").configure({ adapter: new Adapter() });
