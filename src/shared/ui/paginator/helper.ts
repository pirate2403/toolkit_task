export function getPages(totalPages: number, currentPage: number, maxPagesToShow: number) {
    const ellipsis = {
        id: "ellipsis", title: "..."
    };

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    const visiblePages = [];

    if (startPage > 1) {
        visiblePages.push({id: 1, title: "1"});
        if (startPage > 2) visiblePages.push(ellipsis);
    }

    for (let i = startPage; i <= endPage; i++) {
        visiblePages.push({id: i, title: String(i)});
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) visiblePages.push(ellipsis);
        visiblePages.push({id: totalPages, title: String(totalPages)});
    }

    return visiblePages;
}