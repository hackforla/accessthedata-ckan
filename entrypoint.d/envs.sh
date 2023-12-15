# Taken verbatim from .env

set -x
# CKAN uses https://docs.python.org/3/library/configparser.html
# Which uses %(varname) to do interpolation
# Sadly, this interpolation gets applied even to ENVs that are provided,
# so we'll want to escape the % as %% so that e.g. password secrets
# won't break config loading.
function escape_for_python {
  echo $1 | sed 's/%/%%/g'
}

export POSTGRES_HOST=$(escape_for_python "${POSTGRES_HOST:-postgres}")

export CKAN_DB=$(escape_for_python "${CKAN_DB:-ckandb}")

export CKAN_DB_USER=$(escape_for_python "${CKAN_DB_USER:-ckandbuser}")

export CKAN_DB_PASSWORD=$(escape_for_python "${CKAN_DB_PASSWORD:-ckandbpassword}")

export CKAN_DATASTORE_DB=$(escape_for_python "${CKAN_DATASTORE_DB:-ckan_datastore_db}")

export CKAN_DATASTORE_DB_RWUSER=$(escape_for_python "${CKAN_DATASTORE_DB_RWUSER:-ckan}")
export CKAN_DATASTORE_DB_RWPASSWORD=$(escape_for_python "${CKAN_DATASTORE_DB_RWPASSWORD:-ckandbpassword}")

export CKAN_DATASTORE_DB_ROUSER=$(escape_for_python "${CKAN_DATASTORE_DB_ROUSER:-ckan_ro}")
export CKAN_DATASTORE_DB_ROPASSWORD=$(escape_for_python "${CKAN_DATASTORE_DB_ROPASSWORD:-ckanro_pw}")


export CKAN_VERSION=$(escape_for_python "${CKAN_VERSION:-2.10.0}")

export CKAN_SITE_ID=$(escape_for_python "${CKAN_SITE_ID:-default}")

export CKAN_SITE_URL=$(escape_for_python "${CKAN_SITE_URL:-https://localhost:8443}")

export CKAN_PORT=$(escape_for_python "${CKAN_PORT:-5000}")

export CKAN_PORT_HOST=$(escape_for_python "${CKAN_PORT_HOST:-5000}")

export CKAN_SYSADMIN_NAME=$(escape_for_python "${CKAN_SYSADMIN_NAME:-ckan_admin}")

export CKAN_SYSADMIN_PASSWORD=$(escape_for_python "${CKAN_SYSADMIN_PASSWORD:-test1234}")

export CKAN_SYSADMIN_EMAIL=$(escape_for_python "${CKAN_SYSADMIN_EMAIL:-your_email@example.com}")

export CKAN_STORAGE_PATH=$(escape_for_python "${CKAN_STORAGE_PATH:-/var/lib/ckan}")

export CKAN_SMTP_SERVER=$(escape_for_python "${CKAN_SMTP_SERVER:-smtp.corporateict.domain:25}")

export CKAN_SMTP_STARTTLS=$(escape_for_python "${CKAN_SMTP_STARTTLS:-True}")

export CKAN_SMTP_USER=$(escape_for_python "${CKAN_SMTP_USER:-user}")

export CKAN_SMTP_PASSWORD=$(escape_for_python "${CKAN_SMTP_PASSWORD:-pass}")

export CKAN_SMTP_MAIL_FROM=$(escape_for_python "${CKAN_SMTP_MAIL_FROM:-ckan@localhost}")

export CKAN__PLUGINS=$(escape_for_python "${CKAN__PLUGINS:-"envvars image_view text_view recline_view datastore datapusher ckanext_hack4laatd"}")

export CKAN__HARVEST__MQ__TYPE=$(escape_for_python "${CKAN__HARVEST__MQ__TYPE:-redis}")

export CKAN__HARVEST__MQ__HOSTNAME=$(escape_for_python "${CKAN__HARVEST__MQ__HOSTNAME:-redis}")

export CKAN__HARVEST__MQ__PORT=$(escape_for_python "${CKAN__HARVEST__MQ__PORT:-6379}")

export CKAN__HARVEST__MQ__REDIS_DB=$(escape_for_python "${CKAN__HARVEST__MQ__REDIS_DB:-1}")

export CKAN__FAVICON=$(escape_for_python "${CKAN__FAVICON:-"favicon.png"}")

export CKAN___BEAKER__SESSION__SECRET=$(escape_for_python "${CKAN___BEAKER__SESSION__SECRET:-CHANGE_ME}")

export CKAN_SOLR_HOSTNAME=$(escape_for_python "${CKAN_SOLR_HOSTNAME:-solr}")
export CKAN_SOLR_PORT=$(escape_for_python "${CKAN_SOLR_PORT:-8983}")
export CKAN_SOLR_PATH=$(escape_for_python "${CKAN_SOLR_PATH:-/solr/ckan}")

export CKAN_REDIS_HOSTNAME=$(escape_for_python "${CKAN_REDIS_HOSTNAME:-redis}")
export CKAN_REDIS_PORT=$(escape_for_python "${CKAN_REDIS_PORT:-6379}")
export CKAN_REDIS_PATH=$(escape_for_python "${CKAN_REDIS_PATH:-/1}")

export CKAN_DATAPUSHER_HOSTNAME=$(escape_for_python "${CKAN_DATAPUSHER_HOSTNAME:-datapusher}")
export CKAN_DATAPUSHER_PORT=$(escape_for_python "${CKAN_DATAPUSHER_PORT:-8800}")
export CKAN_DATAPUSHER_PATH=$(escape_for_python "${CKAN_DATAPUSHER_PATH:-}")

export CKAN_CALLBACK_HOSTNAME=$(escape_for_python "${CKAN_CALLBACK_HOSTNAME:-ckan}")
export CKAN_CALLBACK_PORT=$(escape_for_python "${CKAN_CALLBACK_PORT:-5000}")
export CKAN_CALLBACK_PATH=$(escape_for_python "${CKAN_CALLBACK_PATH:-}")

export CKAN_SOLR_URL="http://$CKAN_SOLR_HOSTNAME.$SERVICE_DISCOVERY_DOMAIN:${CKAN_SOLR_PORT}${CKAN_SOLR_PATH}"
export CKAN_REDIS_URL="redis://$CKAN_REDIS_HOSTNAME.$SERVICE_DISCOVERY_DOMAIN:${CKAN_REDIS_PORT}${CKAN_REDIS_PATH}"
export CKAN_DATAPUSHER_URL="http://$CKAN_DATAPUSHER_HOSTNAME.$SERVICE_DISCOVERY_DOMAIN:${CKAN_DATAPUSHER_PORT}${CKAN_DATAPUSHER_PATH}"
export CKAN__DATAPUSHER__CALLBACK_URL_BASE="http://$CKAN_CALLBACK_HOSTNAME.$SERVICE_DISCOVERY_DOMAIN:${CKAN_CALLBACK_PORT}${CKAN_CALLBACK_PATH}"

export CKAN_SQLALCHEMY_URL="postgresql://$CKAN_DB_USER:$CKAN_DB_PASSWORD@$POSTGRES_HOST/$CKAN_DB"
export CKAN_DATASTORE_WRITE_URL="postgresql://$CKAN_DATASTORE_DB_RWUSER:$CKAN_DATASTORE_DB_RWPASSWORD@$POSTGRES_HOST/$CKAN_DATASTORE_DB"
export CKAN_DATASTORE_READ_URL="postgresql://$CKAN_DATASTORE_DB_ROUSER:$CKAN_DATASTORE_DB_ROPASSWORD@$POSTGRES_HOST/$CKAN_DATASTORE_DB"
export CKAN___API_TOKEN__JWT__ENCODE__SECRET="string:${CKAN___BEAKER__SESSION__SECRET}"
export CKAN___API_TOKEN__JWT__DECODE__SECRET="string:${CKAN___BEAKER__SESSION__SECRET}"
