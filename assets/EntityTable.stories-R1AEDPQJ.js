import{j as t}from"./jsx-runtime-DiklIkkE.js";import{r as D}from"./index-DRjF_FHU.js";import{E as p}from"./EntityTable-CTTAuq-i.js";import"./Toolbar-DvxeUpV5.js";import"./memoTheme-BaJynKMn.js";import"./Typography-jz8gJ3s3.js";import"./index-DOKlo5zk.js";import"./extendSxProp-BY8sS3zF.js";import"./emotion-react.browser.esm-BpUWAXVR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-Bbh683OF.js";import"./color-EH4scy8d.js";import"./Template-Cay0yqF_.js";import"./index-CMNX_ky1.js";import"./useEnhancedEffect-CvtZChyo.js";import"./ToolTip-DhcxANAI.js";import"./Tooltip-CQaTzqLN.js";import"./useTheme-DJacSCdl.js";import"./useSlot-ClC-LrAR.js";import"./resolveComponentProps-B0Alaaw9.js";import"./useForkRef-YSw3xV27.js";import"./useTimeout-1sC3bvPU.js";import"./useControlled-DEjX-IBh.js";import"./useId-C4t5wyTG.js";import"./getReactElementRef-C4YJ1n4Z.js";import"./Grow-OGmlZpoI.js";import"./utils-um23Eqx5.js";import"./TransitionGroupContext-DZ8oOHtk.js";import"./index-Bx0Ph3cE.js";import"./Popper-BlCi53e5.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-BizbuZGJ.js";import"./useSlotProps-R9J2jDbn.js";import"./isFocusVisible-B8k4qzLc.js";import"./TableRow-B1XkfNAP.js";import"./ButtonBase-DJUItS-t.js";import"./Box-DZzghkYk.js";import"./Alert-gSFT4sM3.js";import"./Stack-Bq5fgCfq.js";import"./useThemeProps-CxlEJirG.js";import"./Alert-BiqHVbCa.js";import"./Close-B92_nBD5.js";import"./IconButton-C0ZkeAlp.js";import"./CircularProgress-AtwZENPD.js";import"./Paper-C-vUFVpU.js";import"./KeyboardArrowRight-DN05LkY6.js";import"./LastPage-C-in3qoZ.js";import"./Select-D7D8iVG0.js";import"./Menu-DEbftHD8.js";import"./Popover-Be9H75-t.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BvtBsRw5.js";import"./Modal-5E7VzZn4.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-DLq5-nq5.js";import"./MenuList-B_WMETQe.js";import"./List-CHLl4BWb.js";import"./utils-DK5FnA_s.js";import"./useFormControl-Dg_6gn_i.js";import"./MenuItem-CcYSG5JI.js";import"./listItemIconClasses-D4nOrAse.js";import"./listItemTextClasses-BcoAy0f1.js";import"./dividerClasses-uajcN7Go.js";import"./Chip-DZEASsOH.js";import"./Chip-DL9GiYLW.js";function e(o,a,l,s,i,d,c){return{id:o,name:a,calories:l,fat:s,carbs:i,protein:d,statusText:c}}const k=[{id:"name",numeric:!1,label:"Dessert (100g serving)",sortLabel:"Dessert"},{id:"protein",numeric:!0,label:"Protein (g)",sortLabel:"Protein "},{id:"statusText",numeric:!1,label:"Status",sortLabel:"Status"}],P=[e("1","Cupcake",305,4.7,67,25.3,"Pending"),e("2","Donut",452,25,51,4.9,"Active"),e("3","Eclair",262,16,24,6,"Pending"),e("4","Frozen yoghurt",159,6,24,4,"Deleted"),e("5","Gingerbread",356,16,49,3.9,"Blocked"),e("5","Gingerbread",356,16,49,3.9,"Blocked"),e("5","Gingerbread",356,16,49,3.9,"Blocked"),e("5","Gingerbread",356,16,49,3.9,"Blocked"),e("5","Gingerbread",356,16,49,3.9,"Blocked"),e("5","Gingerbread",356,16,49,3.9,"Blocked"),e("5","Gingerbread",356,16,49,3.9,"Blocked"),e("5","Gingerbread",356,16,49,3.9,"Blocked"),e("5","Gingerbread",356,16,49,3.9,"Blocked"),e("5","Gingerbread",356,16,49,3.9,"Blocked"),e("5","Gingerbread",356,16,49,3.9,"Blocked"),e("5","Gingerbread",356,16,49,3.9,"Blocked")],Fe={component:p,title:"Factory/Entity Table",tags:["autodocs"],argTypes:{rows:{control:{type:"object"},description:"Data rows to display in the table"},headerTools:{control:{type:"object"},description:"Tools to display in the table toolbar"},noDataCaption:{control:{type:"text"},description:"Caption to show when there are no data rows"}}},r={render:()=>{const[o,a]=D.useState(-1),l=(R,m)=>{console.log("Row selected:",m,R),a(m)},s=()=>{console.log("Details clicked for row:",o)},i=()=>{console.log("Edit clicked for row:",o)},d=()=>{console.log("Delete clicked for row:",o)},c={totalResultCounts:100,pageSize:10,pageNumber:0,handleChangePage:()=>console.log("handleChangePage"),handleChangeRowsPerPage:()=>console.log("handleChangeRowsPerPage"),rows:P,headCells:k,headerTools:t.jsx(t.Fragment,{children:"Title"}),selectedRow:o,noDataCaption:"No data available",orderBy:"",order:"asc",resetSort:()=>console.log("resetSort"),handleHeaderClick:()=>console.log("handleHeaderClick"),onOneClickRow:l,actionDetails:s,actionEdit:i,actionDelete:d,hasAutoId:!0,hasPagination:!0};return t.jsx(p,{...c})}},n={render:()=>{const o={totalResultCounts:100,pageSize:10,pageNumber:0,handleChangePage:()=>console.log(""),handleChangeRowsPerPage:()=>console.log(""),rows:[],headCells:k,headerTools:t.jsx(t.Fragment,{children:"Title"}),selectedRow:-1,noDataCaption:"No data available",orderBy:"",order:"asc",resetSort:()=>console.log(""),handleHeaderClick:()=>console.log("")};return t.jsx(p,{...o})}};var g,h,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [selectedRow, setSelectedRow] = useState<number>(-1);
    const handleRowSelect = (row: Data, index: number) => {
      console.log('Row selected:', index, row);
      setSelectedRow(index);
    };
    const handleDetails = () => {
      console.log('Details clicked for row:', selectedRow);
    };
    const handleEdit = () => {
      console.log('Edit clicked for row:', selectedRow);
    };
    const handleDelete = () => {
      console.log('Delete clicked for row:', selectedRow);
    };
    const props = {
      totalResultCounts: 100,
      pageSize: 10,
      pageNumber: 0,
      handleChangePage: () => console.log('handleChangePage'),
      handleChangeRowsPerPage: () => console.log('handleChangeRowsPerPage'),
      rows: mockRows,
      headCells: mockHeadCells,
      headerTools: <>Title</>,
      selectedRow,
      noDataCaption: 'No data available',
      orderBy: '',
      order: 'asc' as Order,
      resetSort: () => console.log('resetSort'),
      handleHeaderClick: () => console.log('handleHeaderClick'),
      onOneClickRow: handleRowSelect,
      actionDetails: handleDetails,
      actionEdit: handleEdit,
      actionDelete: handleDelete,
      hasAutoId: true,
      hasPagination: true
    };
    return <EntityTable {...props} />;
  }
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var w,C,b;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const props = {
      totalResultCounts: 100,
      pageSize: 10,
      pageNumber: 0,
      handleChangePage: () => console.log(''),
      handleChangeRowsPerPage: () => console.log(''),
      rows: [],
      headCells: mockHeadCells,
      headerTools: <>Title</>,
      selectedRow: -1,
      noDataCaption: 'No data available',
      orderBy: '',
      order: 'asc' as Order,
      resetSort: () => console.log(''),
      handleHeaderClick: () => console.log('')
    };
    return <EntityTable {...props} />;
  }
}`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const Ae=["Default","NoData"];export{r as Default,n as NoData,Ae as __namedExportsOrder,Fe as default};
