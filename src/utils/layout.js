export function getFormItemLayout(columnLayout, columnIndex=0,columnExpand=1)
{
   if(columnLayout===1)
   {
  const formItemLayout={
    labelCol:{
        xs:{span:24},
        sm:{span:7},
        md:{span:10},
    },
    wrapperCol:{
        xs:{span:24},
        sm:{span:17},
        md:{span:12},
    },
  }
  return formItemLayout;
   }
   if(columnLayout===2)
   {
       const expand=columnLayout>2? 2:columnExpand;
       if(expand===2)
       {
           const formItemLayout={
               sm: 24,
               md: 24,
               lg: 24,
               xl: 22,
           };
           return formItemLayout;
       }
       const formItemLayout={
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
    }
    return formItemLayout;
   }
   if(columnLayout===3)
   {
       const expand=columnLayout>3? 3:columnExpand;
       if(expand===3)
       {
           const formItemLayout={
               sm: 24,
               md: 24,
               lg: 24,
               xl: 22,
           };
           return formItemLayout;
       }
       if(expand===2)
       {
           if(columnIndex===0)
           {
               return{
                sm: 24,
                md: 16,
                lg: 16,
                xl: 14,
               };
           }
           const formItemLayout={
            sm: 24,
            md: 16,
            lg: 16,
            xl: {span:14, offset:2},
        };
        return formItemLayout;
       }
    const formItemLayout={
        sm: 24,
        md: 8,
        lg: 8,
        // xl: 12,
    }
    return formItemLayout;
   }
   return null;
}
export function getFormItemLayoutWithOutOffset(columnLayout)
{
    if(columnLayout===1)
    {
        return getFormItemLayout(columnLayout);
    }
    if(columnLayout===2)
    {
        return {sm:24, md:12};
    }
    if(columnLayout===3)
    {
        return {sm:24, md:8};
    }
    return null;

}
export function getButtonLayout(columnLayout)
{
    if(columnLayout===1)
    {
        const formButtonLayout={
            wapperCol:{
            xs:{span:24, offset:0},
            sm:{span:10, offset:7},
            }
        };
        return formButtonLayout;
    }
        const formButtonLayout={
            xl: 24,
            lg: 24,
        };
        return formButtonLayout;
}
export function getDescButtonLayout(columnLayout)
{
    if(columnLayout===1)
    {
        const formButtonLayout={
            wapperCol:{
            xs:{span:24, offset:0},
            sm:{span:10, offset:7},
            }
        };
        return formButtonLayout;
    }
    const formButtonLayout={
        wapperCol:{
        xs:{span:24, offset:0},
        sm:{span:16, offset:8},
        }
    };
    return formButtonLayout;
}
export function getColLayoutWithOutOffset(columnLayout)
{
    if(columnLayout===1)
    {
        return {sm:24, md:24};
    }
    if(columnLayout===2)
    {
        return {sm:24, md:12};
    }
    if(columnLayout===3)
    {
        return {sm:24, md:8};
    }
    return null;
}