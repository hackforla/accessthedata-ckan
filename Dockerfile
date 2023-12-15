FROM ckan/ckan-base:2.10.1
#FROM ckan/ckan-base:2.9.9

# Set up environment variables
ENV APP_DIR=/srv/app
ENV TZ=UTC
RUN echo ${TZ} > /etc/timezone

COPY ./src ${APP_DIR}/src_extensions
COPY ./ckan/patches ${APP_DIR}/patches
COPY ./entrypoint.d/ /docker-entrypoint.d/
COPY ./start_ckan.sh /srv/app/start_ckan.sh

# Make sure both files are not exactly the same
RUN if ! [ /usr/share/zoneinfo/${TZ} -ef /etc/localtime ]; then \
        cp /usr/share/zoneinfo/${TZ} /etc/localtime ;\
    fi ;


RUN for d in $APP_DIR/patches/*; do \
        if [ -d $d ]; then \
            for f in `ls $d/*.patch | sort -g`; do \
                cd $SRC_DIR/`basename "$d"` && echo "$0: Applying patch $f to $SRC_DIR/`basename $d`"; patch -p1 < "$f" ; \
            done ; \
        fi ; \
    done

RUN cd ${APP_DIR}/src_extensions/ckanext-hack4laatd; \
      pip install -e .; \
      pip install -r requirements.txt
