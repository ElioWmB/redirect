<a href='javascript:openUrl()'>Visit here</a>
<script>
var sites=['http://www.google.com/',
'http://www.msn.com/',
'http://www.yahoo.com/'
];

function openUrl(){
    var i = Math.round(Math.random()*(sites.length-1));
    window.location.href=sites[i];
    return false;
}
</script>
