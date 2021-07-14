FROM node:lts-alpine3.12

LABEL AUTHOR="none" \
      VERSION=0.1.4

ARG KEY="-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABFwAAAAdzc2gtcnNhAAAAAwEAAQAAAQEAt8okXuPdzKojLUPsklAaF+lsijb/0S8bVSC/81Vb0IJB8/Hoa+fO\nLr5jSvdoXlk9WwwCssam2Dp2OqyjpjLef54zC7wKNvo6Y66gUrDkR8+75qADAYoe26adaQ\nQp3p7jcL/n6TnqBjFbe5M/bPxJWGj7yY2UB6ZOUymDZmabBZovuXlyk0Ad4W7XH68Y4iTF\nU6djzpJgJmNah/UFOzDJL+jieam1smD3j6yj6xto1MiyknCaNWaab0dprhVnyVaPNkkQBP\nZAgvObmxP30Qe53N8uDXb00xWjvheZ0btGlPrRcFUmMTv/96DOs/60y8+5F6n7A2n168sB\nK0ghqztCNwAAA8h/RJMwf0STMAAAAAdzc2gtcnNhAAABAQC3yiRe493MqiMtQ+ySUBoX6W\nyKNv/RLxtVIL/zVVvQgkHz8ehr584uvmNK92heWT1bDAKyxqbYOnY6rKOmMt5/njMLvAo2\n+jpjrqBSsORHz7vmoAMBih7bpp1pBCnenuNwv+fpOeoGMVt7kz9s/ElYaPvJjZQHpk5TKY\nNmZpsFmi+5eXKTQB3hbtcfrxjiJMVTp2POkmAmY1qH9QU7MMkv6OJ5qbWyYPePrKPrG2jU\nyLKScJo1ZppvR2muFWfJVo82SRAE9kCC85ubE/fRB7nc3y4NdvTTFaO+F5nRu0aU+tFwVS\nYxO//3oM6z/rTLz7kXqfsDafXrywErSCGrO0I3AAAAAwEAAQAAAQEAjRiR7YtQNxSS5uhT\nkUwPjDX2zvFEWcqpWCRJWL06PIwTp/0aauTOBFLDlcT0iiJGmURSOf+KDUxsgcUR6cD50c\n2Y8LROv0BBXU+t423MA1l2rqo/RIpOAGEcTYgVwMQIZgHeP83nXRO9YNR9h+TzRf1q96RK\ndcj2LqAbMZ0p/BTCdlytJvrQMByR5kIdw/oyeuK+SyYIBhb3ChpHooZ3le7jZioJCEw+Rl\n7frXdpHUQ35DaxqT1swOADmpJtWWICdAv3YEdIEFrrDb3tF59uxY2q/hnSoJd9vPi9LSQB\nnpf11GiPFnCBZu7lTnqdrJhDEwtskShqVt4tyrgcgJyWoQAAAIAnnZgFwQT5bMGbAgQ9pR\n8aVH+jbFrMVgmOp0vAHDDHq/gdACla7PXdBAPRBpLB5Nak7/PclDzUSSW1mCaff2xX4xXc\nT8SXWoGfJkeAwg31pqCh7XA9N+UJ45Ij4qChV8P6M63wkU85LbHXtXdWzXrHwiL2CfzGs9\npVRG6B/upcIgAAAIEA5JgckO+qjAjzTYUMCY+ekbInNTZ1rwZ4ROKlyrHcL4/T/WjNzfsx\nXn2Vdd8WHpb0Wz2quQq1pjTWKwl6+ibUv88fN3+/yOWeRl/5G4+qDfFvOjtdIpJsw1YiPg\nv4XTebZecPKtaqO62P/kZHH9T0rciF26ajhB08b6jPbGeOoqcAAACBAM3S6b00W4X0e9+P\nG2zKid983B0fPdCavG+Nj7zPLhepa8naqwMadufJSd9y1211TxY54Q5Vp7V5gYy+OhwqEZ\nturn3dE58yd5BcqpyQbtzGsY0XmIHksiVAYBOZBTYcfvL8ZqKTZqfawX5qeKVToh1UbiRL\ngY8FhYNirmb0PiXxAAAAC291aUBnaXQuY29tAQIDBAUGBw==\n-----END OPENSSH PRIVATE KEY-----"

ENV DEFAULT_LIST_FILE=crontab_list.sh \
    CUSTOM_LIST_MERGE_TYPE=append \
    COOKIES_LIST=/scripts/logs/cookies.list \
    REPO_URL=git@gitee.com:Eicky/jd_scripts.git \
    REPO_BRANCH=master

RUN set -ex \
    && apk update \
    && apk upgrade \
    && apk add --no-cache bash tzdata git moreutils curl jq openssh-client \
    && rm -rf /var/cache/apk/* \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && mkdir -p /root/.ssh \
    && echo -e $KEY > /root/.ssh/id_rsa \
    && chmod 600 /root/.ssh/id_rsa \
    && ssh-keyscan gitee.com > /root/.ssh/known_hosts \
    && git clone -b $REPO_BRANCH $REPO_URL /scripts \
    && cd /scripts \
    && mkdir logs \
    && npm config set registry https://registry.npm.taobao.org \
    && npm install \
    && cp /scripts/docker/docker_entrypoint.sh /usr/local/bin \
    && chmod +x /usr/local/bin/docker_entrypoint.sh

WORKDIR /scripts

ENTRYPOINT ["docker_entrypoint.sh"]

CMD [ "crond" ]