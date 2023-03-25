ckan config-tool $CKAN_INI "ckan.cors.origin_allow_all = True" # XXX
ckan config-tool $CKAN_INI "ckan.cors.origin_whitelist = http://localhost:3000 https://accessthedata.com"
