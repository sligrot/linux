/**
 * Created by Administrator on 2018/7/16 0016.
 */



var fxOnReady = function () {
    var tools = [
        {tool: 'pdf-to-word',   title: 'PDF To Word', clr: '#bd081c', url: "/pdf-to-word", searchTags: ['convert', 'microsoft office', 'pdf to doc', 'pdf to docx', 'pdf to word', 'edit pdfs', 'pdf editor']},
        {tool: 'pdf-to-excel',  title: 'PDF To Excel', clr: '#e53238', url: "/pdf-to-excel", searchTags: ['convert', 'microsoft office', 'sheet', 'pdf to xls', 'pdf to xlsx', 'pdf to excel', 'table', 'tables', 'edit pdf', 'pdf editor']},
        {tool: 'pdf-to-image',  title: 'PDF To JPG', clr: '#ff5a5f', url: "/pdf-to-jpg", searchTags: ['convert', 'photo', 'foto', 'pdf to jpg', 'pdf to jpeg', 'pdf to image', 'extract images', 'extract jpg', 'extract jpeg']},
        {tool: 'export-image',  title: 'Export All Images', clr: '#fb4226', url: "/export-all-images", searchTags: ['convert', 'photo', 'foto', 'pdf to jpg', 'pdf to jpeg', 'pdf to image', 'extract images', 'extract jpg', 'extract jpeg']},
        {tool: 'pdf-to-ppt',    title: 'PDF To PPT', clr: '#f44600', url: "/pdf-to-ppt", searchTags: ['convert', 'microsoft office', 'pdf to ppt', 'pdf to pptx', 'pdf to powerpoint', 'edit pdfs', 'pdf editor']},
        {tool: 'pdf-to-text',   title: 'PDF To Text', clr: '#ff6600', url: "/pdf-to-text", searchTags: ['pdf to text']},
        {tool: 'word-to-pdf',   title: 'Word To PDF', clr: '#f88d2d', url: "/word-to-pdf", searchTags: ['convert', 'microsoft office', 'doc to pdfs', 'docx to pdfs', 'word to pdfs']},
        {tool: 'excel-to-pdf',  title: 'Excel To PDF', clr: '#fd8308', url: "/excel-to-pdf", searchTags: ['convert', 'microsoft office', 'sheet', 'xls to pdfs', 'xlsx to pdfs', 'excel to pdf', 'table', 'tables']},
        {tool: 'image-to-pdf',  title: 'Image To PDF', clr: '#ffbb00', url: "/image-to-pdf", searchTags: ['convert', 'photo', 'foto', 'jpg to pdfs', 'jpeg to pdfs', 'image to pdfs']},
        {tool: 'html-to-pdf',   title: 'HTML To PDF', clr: '#E2CA09', url: "/html-to-pdf", searchTags: ['html to pdf']},
        {tool: 'ppt-to-pdf',    title: 'PPT To PDF', clr: '#9db63b', url: "/ppt-to-pdf", searchTags: ['convert', 'microsoft office', 'ppt to pdfs', 'pptx to pdfs', 'powerpoint to pdfs']},
        {tool: 'text-to-pdf',   title: 'Text To PDF', clr: '#7ebd00', url: "/text-to-pdf", searchTags: ['text to pdf']},
        {tool: 'pdf-inksign',   title: 'Sign PDF', clr: '#5fcf80', url: "/sign-pdf", searchTags: ['sign pdfs', 'signature', 'add signature', 'esign', 'sign documents', 'e sign', 'e-sign']},
        {tool: 'merge-pdf',     title: 'Merge PDF', clr: '#00b1ab', url: "/merge-pdf", searchTags: ['merge pdfs', 'merge documents', 'combine pdfs', 'combine documents', 'join pdfs', 'pdf joiner', 'combiner']},
        {tool: 'add-watermark', title: 'Watermark', clr: '#2dc9d7', url: "/add-watermark-to-pdf", searchTags: ['add-watermark']},
        {tool: 'compress-pdf',  title: 'Compress PDF', clr: '#3abfe6', url: "/compress-pdf", searchTags: ['compress pdfs', 'small', 'reduce size', 'reduce pdf size', 'make smaller', 'make pdf smaller', 'email', 'send']},
        {tool: 'split-pdf',     title: 'Split PDF', clr: '#1769ff', url: "/split-pdf", searchTags: ['split pdfs', 'extract pages', 'select pages']},
        {tool: 'organize-pdf',  title: 'Organize PDF', clr: '#4574e0', url: "/page-organizer", searchTags: ['organize pdf', 'organize page']},
        {tool: 'flatten-pdf',   title: 'Flatten PDF', clr: '#777bb4', url: "/flatten-pdf", searchTags: ['flatten pdf']},
        {tool: 'add-header-footer', title: 'Header & Footer', clr: '#6a5fbb', url: "/headerfooter", searchTags: ['add header footer']},
        {tool: 'password-protect',  title: 'Password Protect', clr: '#744c9e', url: "/protect-pdf", searchTags: ['protect pdfs', 'protect documents', 'add passwords', 'security', 'secure']},
        {tool: 'redact-pdf',    title: 'Redact PDF', clr: '#7289da', url: "/redact-pdf", searchTags: ['redact pdf']},
        {tool: 'pdf-to-html',   title: 'PDF To Html', clr: '#663366', url: "/pdf-to-html", searchTags: ['pdf to html']},
        {tool: 'pdf-to-cpdf',   title: 'PDF To cPDF', clr: '#411241', url: "/pdf-to-cpdf", searchTags: ['cpdf', 'connected pdf']},
        {tool: 'edit-pdf',   title: 'Edit PDF', clr: '#411241', url: "/phantompdf", searchTags: ['text', 'add text', 'add shape', 'add image', 'edit pdfs', 'pdf editor', 'draw']},
        {tool: 'foxit-drive',   title: 'Foxit Drive', clr: '#411241', url: "/foxit-drive", searchTags: ['cpdf', 'foxit drive', 'cloud drive']}
    ];

    function getToolData(key) {
        var item;
        for (var i =0; i < tools.length; i++){
            item = tools[i];
            if (item.tool === key){
                return item;
            }
        }

        return {};
    }

    function isMatchKey(key, toolTags) {
        if(!toolTags)
            return false;
        var item;
        for (var i =0; i < toolTags.length; i++){
            item = toolTags[i];
            var hasInput = item.indexOf(key);
            if (hasInput !== -1)
                return true;
        }
        return false;
    }

    var baseUrl = 'https://online.foxitsoftware.com';
    $('.header .logo-wrapper').attr('href', baseUrl);
    $('.items-wrapper .item').each(function (index) {
        var itemType = $(this).attr('class').replace('item clr ', '');
        itemType.replace('hide', '');
        console.log('type:' + itemType);
        var toolData = getToolData(itemType);
        $(this).attr('href', baseUrl + toolData.url +"?from=chrome_extension");
        $(this).children('.tool-text').html(toolData.title);
    })

    $('.header .icon-search').off('click.online').on('click.online', function () {
        var logo = $('.header .logo-wrapper');
        var input = $('.header input.search-text');

        var inputIsHide = input.hasClass('hide');
        if (inputIsHide){
            logo.addClass('hide');
            input.removeClass('hide');
        } else {
            input.val('');
            input.addClass('hide');
            logo.removeClass('hide');
        }
    });
    $('.header input.search-text').off('input.online').on('input.online', function () {
        var value = $(this).val();
        if (value.length === 0){
            $('.items-wrapper .item').removeClass('hide');
            return;
        }
        value = value.toLowerCase();
        $('.items-wrapper .item').each(function (index) {
            var itemType = $(this).attr('class').replace('item clr ', '');
            itemType = itemType.replace(' hide', '');

            var data = getToolData(itemType);
            var hasInput = isMatchKey(value, data.searchTags);
            if(hasInput){
                console.log('match type:' + itemType);
                $(this).removeClass('hide');
            }else{
                $(this).addClass('hide');
            }
        })
    });
}

fxOnReady();
/*if (document.readyState !== 'loading') {
    fxOnReady();
} else {
    document.addEventListener('DOMContentLoaded', fxOnReady);
}*/
