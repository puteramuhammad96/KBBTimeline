import React, { useEffect, useMemo, useRef, useState } from "react";
import "frappe-gantt/dist/frappe-gantt.css";
import Gantt from "frappe-gantt";
import { format, parseISO, differenceInCalendarDays } from "date-fns";
import cx from "classnames";

// (The rest of App.jsx code from the canvas is inserted here)
