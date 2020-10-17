
// Get Unique Company from Json Data
export const getCompany = (list) => {
    var uniqueCompany = [];
    // eslint-disable-next-line
    list.map((product, index) => {
        if (product.company) {
            // eslint-disable-next-line
            if (uniqueCompany.map((o) => o.value).indexOf(product.company) === -1) {
                uniqueCompany.push({value:product.company,label:product.company});
            }
        }
    })
    return uniqueCompany;
}

// Get Unique Area from Json Data
export const getArea = (list) => {
    var uniqueArea = [];
    // eslint-disable-next-line
    list.map((product, index) => {
        if (product.area) {
            // eslint-disable-next-line
            if (uniqueArea.map((o) => o.value).indexOf(product.area) === -1) {
                uniqueArea.push({value:product.area,label:product.area});
            }
        }
    })
    return uniqueArea;
}

// Get Visible Items from Json Data
export const getVisibleItems = (data, {company,searchBy,area,job}) => {
    return data.filter(product => {
        const companyName = (product.company.toLowerCase().indexOf(company.toLowerCase()) > -1)
        const filterArea = (product.area.toLowerCase().indexOf(area.toLowerCase()) > -1)
        const searchByName = (product.name.toLowerCase().indexOf(searchBy.toLowerCase()) > -1)
        const searchByJob = (product.job.toLowerCase().indexOf(job.toLowerCase()) > -1)

        return companyName && searchByName && filterArea && searchByJob;
    })  
}
