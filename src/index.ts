// components:
// -------------------------
// Data Display
export { AvatarCustom as Avatar } from './components/data-display/avatar/Avatar';
export { BadgeCustom as Badge } from './components/data-display/badge/Badge';
export { ChipCustom as Chip } from './components/data-display/chip/Chip';
export { DividerCustom as Divider } from './components/data-display/divider/Divider';
export { ListCustom as List } from './components/data-display/list/List';
export { ToolTipCustom as ToolTip } from './components/data-display/tooltip/ToolTip';
export { TableCustom as Table } from './components/data-display/table/Table';

// Datepicker
export { DatepickerCustom as Datepicker } from './components/datepicker/date-picker/Datepicker';
export { TimePickerCustom as TimePicker } from './components/datepicker/time-picker/TimePicker';

// Factory
export { EntityTable } from './components/factory/entity-table/EntityTable';
export { FormCreator } from './components/factory/form-creator/FormCreator';
export { IconFactory } from './components/factory/icon-factory/IconFactory';

// Feedback
export { AlertCustom as Alert } from './components/feedback/alert/Alert';
export { DialogCustom as Dialog } from './components/feedback/dialog/Dialog';
export { Loading } from './components/feedback/loading/Loading';
export { Skeleton } from './components/feedback/skeleton/Skeleton';
export { SnackbarCustom as Snackbar } from './components/feedback/snackbar/Snackbar';
export { CircularProgressCustom as CircularProgress } from './components/feedback/progress-circular/CircularProgress';
export { LinearProgressCustom as LinearProgress } from './components/feedback/progress-linear/LinearProgress';

// Input
export { AutoCompleteCustom as AutoComplete } from './components/inputs/auto-complete/AutoComplete';
export { ButtonCustom as Button } from './components/inputs/button/Button';
export { LoadingButtonCustom as LoadingButton } from './components/inputs/loading-button/LoadingButton';
export { CheckboxCustom as Checkbox } from './components/inputs/checkbox/Checkbox';
export { FloatButton } from './components/inputs/float-button/FloatButton';
export { InputDigit } from './components/inputs/input-digit/InputDigit';
export { InputNumber } from './components/inputs/input-number/InputNumber';
export { InputSelect } from './components/inputs/input-select/InputSelect';
export { InputText } from './components/inputs/input-text/InputText';
export { RadioGroupCustom as RadioGroup } from './components/inputs/radio-group/RadioGroup';
export { RatingCustom as Rating } from './components/inputs/rating/Rating';
export { SearchCustom as Search } from './components/inputs/search/Search';
export { SwitchCustom as Switch } from './components/inputs/switch/Switch';
export { Textarea } from './components/inputs/textarea/Textarea';

// Navigation
export { DrawerCustom as Drawer } from './components/navigation/drawer/Drawer';
export { MenuCustom as Menu } from './components/navigation/menu/Menu';
export { StepperCustom as Stepper } from './components/navigation/stepper/Stepper';
export { SpeedDialCustom as SpeedDial } from './components/navigation/speed-dial/SpeedDial';
export { TabCustom as Tab } from './components/navigation/tab/Tab';
export { BreadcrumbsCustom as Breadcrumbs } from './components/navigation/breadcrumbs/Breadcrumbs';
export { LinkCustom as Link } from './components/navigation/link/Link';
export { PaginationCustom as Pagination } from './components/navigation/pagination/Pagination';

// Surfaces
export { AccordionCustom as Accordion } from './components/surfaces/accordion/Accordion';
export { CardCustom as Card } from './components/surfaces/card/Card';
export { Carousel } from './components/surfaces/carousel/Carousel';
export { PaperCustom as Paper } from './components/surfaces/paper/Paper';

// Types:
export type { AutoCompleteOptions } from './components/inputs/auto-complete/types';
export type { DrawerListItems } from './components/navigation/drawer/types';
export type { FormDataSet } from './components/factory/form-creator/types';
export type { SelectItems } from './components/inputs/input-select/types';
export type { RadioItems } from './components/inputs/radio-group/types';
export type { IconOptions } from './components/factory/icon-factory/types';
export type { TabItem } from './components/navigation/tab/types';
export type { HeadCell } from 'components/factory/entity-table/types';
export type { AccordionItems } from './components/surfaces/accordion/types';
export type { MenuItems } from './components/navigation/menu/types';
export type { ListItemsType } from './components/data-display/list/types';
export type { TableColumns } from './components/data-display/table/types';
export type { SpeedDialActionType } from './components/navigation/speed-dial/types';
export type {
    StandardColor,
    StandardSeverity,
    StandardLabelPlacement,
    StandardSize,
    StandardVariant,
    StandardColorUnion,
} from './shared/types';

// colors:
export { RazorBrandColor, color } from './shared/color';

// fonts
export { fonts, fontSize } from './shared/fonts';

// icons:
export { default as AccessAlarmIcon } from '@mui/icons-material/AccessAlarm';
export { default as AccessTimeIcon } from '@mui/icons-material/AccessTime';
export { default as AccountCircleIcon } from '@mui/icons-material/AccountCircle';
export { default as AddIcon } from '@mui/icons-material/Add';
export { default as AppsIcon } from '@mui/icons-material/Apps';
export { default as ArrowBackIosIcon } from '@mui/icons-material/ArrowBackIos';
export { default as ArrowForwardIosIcon } from '@mui/icons-material/ArrowForwardIos';
export { default as ArrowForwardIcon } from '@mui/icons-material/ArrowForward';
export { default as ArrowBackIcon } from '@mui/icons-material/ArrowBack';
export { default as ArrowUpwardIcon } from '@mui/icons-material/ArrowUpward';
export { default as ArrowDownwardIcon } from '@mui/icons-material/ArrowDownward';
export { default as CancelIcon } from '@mui/icons-material/Cancel';
export { default as CategoryIcon } from '@mui/icons-material/Category';
export { default as CheckIcon } from '@mui/icons-material/Check';
export { default as CheckCircleIcon } from '@mui/icons-material/CheckCircle';
export { default as CheckCircleOutlineIcon } from '@mui/icons-material/CheckCircleOutline';
export { default as CheckBoxIcon } from '@mui/icons-material/CheckBox';
export { default as ChevronLeftIcon } from '@mui/icons-material/ChevronLeft';
export { default as ChevronRightIcon } from '@mui/icons-material/ChevronRight';
export { default as CloseIcon } from '@mui/icons-material/Close';
export { default as CoffeeIcon } from '@mui/icons-material/Coffee';
export { default as CreateIcon } from '@mui/icons-material/Create';
export { default as DeleteIcon } from '@mui/icons-material/Delete';
export { default as EmailIcon } from '@mui/icons-material/Email';
export { default as ErrorIcon } from '@mui/icons-material/Error';
export { default as ErrorOutlineIcon } from '@mui/icons-material/ErrorOutline';
export { default as FilterAltIcon } from '@mui/icons-material/FilterAlt';
export { default as FilterAltOffIcon } from '@mui/icons-material/FilterAltOff';
export { default as FilterListIcon } from '@mui/icons-material/FilterList';
export { default as GroupIcon } from '@mui/icons-material/Group';
export { default as HelpIcon } from '@mui/icons-material/Help';
export { default as HelpOutlineIcon } from '@mui/icons-material/HelpOutline';
export { default as InterestsIcon } from '@mui/icons-material/Interests';
export { default as LocationOnIcon } from '@mui/icons-material/LocationOn';
export { default as LocationOffIcon } from '@mui/icons-material/LocationOff';
export { default as LocalSeeIcon } from '@mui/icons-material/LocalSee';
export { default as LoopIcon } from '@mui/icons-material/Loop';
export { default as ManageAccountsIcon } from '@mui/icons-material/ManageAccounts';
export { default as MenuIcon } from '@mui/icons-material/Menu';
export { default as MoreHorizIcon } from '@mui/icons-material/MoreHoriz';
export { default as MoreVertIcon } from '@mui/icons-material/MoreVert';
export { default as PhotoIcon } from '@mui/icons-material/Photo';
export { default as PinDropIcon } from '@mui/icons-material/PinDrop';
export { default as RefreshIcon } from '@mui/icons-material/Refresh';
export { default as ReportProblemIcon } from '@mui/icons-material/ReportProblem';
export { default as SettingsIcon } from '@mui/icons-material/Settings';
export { default as StarRateIcon } from '@mui/icons-material/StarRate';
export { default as ViewListIcon } from '@mui/icons-material/ViewList';
export { default as VisibilityOffIcon } from '@mui/icons-material/VisibilityOff';
export { default as VisibilityIcon } from '@mui/icons-material/Visibility';
export { default as WhatsAppIcon } from '@mui/icons-material/WhatsApp';
export { default as WifiIcon } from '@mui/icons-material/Wifi';
export { default as StorefrontIcon } from '@mui/icons-material/Storefront';
export { default as StoreIcon } from '@mui/icons-material/Store';
export { default as CalendarViewMonthIcon } from '@mui/icons-material/CalendarViewMonth';
export { default as CameraEnhanceIcon } from '@mui/icons-material/CameraEnhance';
export { default as ChildCareIcon } from '@mui/icons-material/ChildCare';
export { default as SearchIcon } from '@mui/icons-material/Search';
export { default as InstagramIcon } from '@mui/icons-material/Instagram';
export { default as WarningIcon } from '@mui/icons-material/Warning';
export { default as AutoAwesomeMosaicIcon } from '@mui/icons-material/AutoAwesomeMosaic';
export { default as ReplayIcon } from '@mui/icons-material/Replay';
export { default as SaveIcon } from '@mui/icons-material/Save';
