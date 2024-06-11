

popup.js - line 886
```js
function setUserDetails(html) {
    $('#rspns').html(DOMPurify.sanitize(html));

    if ($('#createdby').length > 0) {
        $('.nav-tabs a[data-bs-target="#tabuser"]').tab('show');
        $('#createdby').click(function () {
            var usr = $(this).data('username');
            $('#tbxname').val(usr).focus(function () {
                $(this).select();
            });

            getUserDetails(usr);
        });
    }
    else
        $('#tbxname').val('');

    $('#waitinguser').hide();
}

```


```js
//current only implementation is doubleclick label to edit condition field, or open condition in list with CTRL/CMD
function flowDesignerDoubleClick() {
    if (location.pathname != "/$flow-designer.do") return;
    document.addEventListener('dblclick', event => {
        if (angular && event.path.length > 2 &&
            (event.path[2].classList?.contains('form-group') || event.path[2].classList?.contains('content-container'))) {
            let elm = event.path[2].querySelector('.compounds');
            if (elm) {
                let angElm = angular.element(elm).scope().$parent;
                let oldValue = angElm.filterConfig.encodedQuery;
                if (event.ctrlKey || event.metaKey) {
                    window.open(`${angElm.table}_list.do?sysparm_query=${oldValue}&sysparm_filter_pinned=true`);
                } else {
                    let newValue = prompt('[SN Utils]\nCondition table: ' + angElm.table + '\nValue:', oldValue);
                    if (newValue !== null && newValue != oldValue) {
                        angElm.$emit("snfilter:initialize_query", newValue);
                    }
                }
            }
            else {
                snuSlashCommandInfoText('Flow Designer label doubeleclick only implemented for Condition fields', false);
                setTimeout(snuSlashCommandHide, 4000);
            }
        }
        else if (event?.target?.classList?.contains('form-label')) {
            snuSlashCommandInfoText('Flow Designer label doubeleclick only implemented for Condition fields', false);
            setTimeout(snuSlashCommandHide, 4000);
        }
    })
}


```


