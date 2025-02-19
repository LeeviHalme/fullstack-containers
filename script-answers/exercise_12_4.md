Script started on Tue Feb 18 19:00:14 2025
[?2004h[0;36m([0;32mmain ↑1 U:1 ?:2 [0;31m✗[0;36m)[39m [0;36mscript-answers[39m docker start -i gracious_pascal[1Pallant_sammetracious_pascal
[?2004l[?2004h]0;root@590c8e7bb663: /root@590c8e7bb663:/# [H[2J]0;root@590c8e7bb663: /root@590c8e7bb663:/# apt instll  all node         ll curl -y
[?2004lReading package lists... 0%Reading package lists... 0%Reading package lists... 0%Reading package lists... 4%Reading package lists... 4%Reading package lists... 5%Reading package lists... 5%Reading package lists... 52%Reading package lists... 52%Reading package lists... 52%Reading package lists... 52%Reading package lists... 61%Reading package lists... 61%Reading package lists... 72%Reading package lists... 72%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 85%Reading package lists... 85%Reading package lists... 95%Reading package lists... 95%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... Done
Building dependency tree... 0%Building dependency tree... 0%Building dependency tree... 50%Building dependency tree... 50%Building dependency tree... Done
Reading state information... 0% Reading state information... 0%Reading state information... Done
The following additional packages will be installed:
  ca-certificates libbrotli1 libcurl4 libldap-2.5-0 libldap-common libnghttp2-14 libpsl5 librtmp1 libsasl2-2 libsasl2-modules
  libsasl2-modules-db libssh-4 openssl publicsuffix
Suggested packages:
  libsasl2-modules-gssapi-mit | libsasl2-modules-gssapi-heimdal libsasl2-modules-ldap libsasl2-modules-otp libsasl2-modules-sql
The following NEW packages will be installed:
  ca-certificates curl libbrotli1 libcurl4 libldap-2.5-0 libldap-common libnghttp2-14 libpsl5 librtmp1 libsasl2-2 libsasl2-modules
  libsasl2-modules-db libssh-4 openssl publicsuffix
0 upgraded, 15 newly installed, 0 to remove and 21 not upgraded.
Need to get 2963 kB of archives.
After this operation, 6851 kB of additional disk space will be used.
[33m0% [Working][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m[33m0% [Waiting for headers][0m                        Get:1 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 openssl arm64 3.0.2-0ubuntu1.18 [1163 kB]
[33m0% [1 openssl 4096 B/1163 kB 0%][0m[33m21% [1 openssl 784 kB/1163 kB 67%][0m[33m33% [Connecting to ports.ubuntu.com][0m                                    Get:2 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 ca-certificates all 20240203~22.04.1 [162 kB]
[33m33% [2 ca-certificates 4096 B/162 kB 3%][0m[33m                                        38% [Connecting to ports.ubuntu.com][0m                                    Get:3 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libnghttp2-14 arm64 1.43.0-1ubuntu0.2 [76.0 kB]
[33m38% [3 libnghttp2-14 1147 B/76.0 kB 2%]                                                                                            213 kB/s 7s[0m[33m40% [3 libnghttp2-14 66.3 kB/76.0 kB 87%]                                                                                          213 kB/s 7s[0m[33m40% [3 libnghttp2-14 66.3 kB/76.0 kB 87%]                                                                                          213 kB/s 7s[0m[33m42% [Connecting to ports.ubuntu.com]                                                                                               213 kB/s 7s[0m                                                                                                                                              Get:4 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 libpsl5 arm64 0.21.0-1.2build2 [58.3 kB]
[33m42% [4 libpsl5 6940 B/58.3 kB 12%]                                                                                                 213 kB/s 7s[0m[33m45% [Connecting to ports.ubuntu.com]                                                                                               213 kB/s 7s[0m                                                                                                                                              Get:5 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 publicsuffix all 20211207.1025-1 [129 kB]
[33m45% [5 publicsuffix 9834 B/129 kB 8%]                                                                                              213 kB/s 7s[0m[33m50% [Connecting to ports.ubuntu.com]                                                                                               213 kB/s 6s[0m                                                                                                                                              Get:6 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 libbrotli1 arm64 1.0.9-2build6 [314 kB]
[33m50% [6 libbrotli1 4042 B/314 kB 1%]                                                                                                213 kB/s 6s[0m[33m59% [Connecting to ports.ubuntu.com]                                                                                               213 kB/s 4s[0m                                                                                                                                              Get:7 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libsasl2-modules-db arm64 2.1.27+dfsg2-3ubuntu1.2 [21.1 kB]
[33m59% [7 libsasl2-modules-db 4044 B/21.1 kB 19%]                                                                                     213 kB/s 4s[0m[33m61% [Connecting to ports.ubuntu.com]                                                                                               213 kB/s 4s[0m                                                                                                                                              Get:8 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libsasl2-2 arm64 2.1.27+dfsg2-3ubuntu1.2 [55.6 kB]
[33m61% [8 libsasl2-2 2596 B/55.6 kB 5%]                                                                                               213 kB/s 4s[0m[33m64% [Connecting to ports.ubuntu.com]                                                                                               213 kB/s 4s[0m                                                                                                                                              Get:9 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libldap-2.5-0 arm64 2.5.18+dfsg-0ubuntu0.22.04.2 [180 kB]
[33m64% [9 libldap-2.5-0 8386 B/180 kB 5%]                                                                                             213 kB/s 4s[0m[33m70% [Connecting to ports.ubuntu.com]                                                                                               213 kB/s 3s[0m                                                                                                                                              Get:10 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 librtmp1 arm64 2.4+20151223.gitfa8646d.1-2build4 [59.2 kB]
[33m70% [10 librtmp1 4096 B/59.2 kB 7%]                                                                                                213 kB/s 3s[0m[33m73% [Connecting to ports.ubuntu.com]                                                                                               213 kB/s 3s[0m                                                                                                                                              Get:11 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libssh-4 arm64 0.9.6-2ubuntu0.22.04.3 [185 kB]
[33m73% [11 libssh-4 8386 B/185 kB 5%]                                                                                                 213 kB/s 3s[0m[33m80% [Connecting to ports.ubuntu.com]                                                                                               213 kB/s 2s[0m                                                                                                                                              Get:12 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libcurl4 arm64 7.81.0-1ubuntu1.20 [284 kB]
[33m80% [12 libcurl4 2594 B/284 kB 1%]                                                                                                 213 kB/s 2s[0m[33m89% [Connecting to ports.ubuntu.com]                                                                                               213 kB/s 1s[0m                                                                                                                                              Get:13 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 curl arm64 7.81.0-1ubuntu1.20 [190 kB]
[33m89% [13 curl 4042 B/190 kB 2%]                                                                                                     213 kB/s 1s[0m[33m95% [Connecting to ports.ubuntu.com]                                                                                               213 kB/s 0s[0m                                                                                                                                              Get:14 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libldap-common all 2.5.18+dfsg-0ubuntu0.22.04.2 [15.9 kB]
[33m95% [14 libldap-common 5492 B/15.9 kB 35%]                                                                                         213 kB/s 0s[0m[33m97% [Connecting to ports.ubuntu.com]                                                                                               213 kB/s 0s[0m                                                                                                                                              Get:15 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libsasl2-modules arm64 2.1.27+dfsg2-3ubuntu1.2 [68.4 kB]
[33m97% [15 libsasl2-modules 9835 B/68.4 kB 14%]                                                                                       213 kB/s 0s[0m[33m100% [Working]                                                                                                                     213 kB/s 0s[0m                                                                                                                                              Fetched 2963 kB in 17s (175 kB/s)
debconf: delaying package configuration, since apt-utils is not installed

7[0;23r8[1ASelecting previously unselected package openssl.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 4460 files and directories currently installed.)
Preparing to unpack .../00-openssl_3.0.2-0ubuntu1.18_arm64.deb ...
7[24;0f[42m[30mProgress: [  0%][49m[39m [.........................................................................................................................] 87[24;0f[42m[30mProgress: [  2%][49m[39m [#........................................................................................................................] 8Unpacking openssl (3.0.2-0ubuntu1.18) ...
7[24;0f[42m[30mProgress: [  3%][49m[39m [###......................................................................................................................] 8Selecting previously unselected package ca-certificates.
Preparing to unpack .../01-ca-certificates_20240203~22.04.1_all.deb ...
7[24;0f[42m[30mProgress: [  5%][49m[39m [#####....................................................................................................................] 8Unpacking ca-certificates (20240203~22.04.1) ...
7[24;0f[42m[30mProgress: [  7%][49m[39m [#######..................................................................................................................] 8Selecting previously unselected package libnghttp2-14:arm64.
Preparing to unpack .../02-libnghttp2-14_1.43.0-1ubuntu0.2_arm64.deb ...
7[24;0f[42m[30mProgress: [  8%][49m[39m [#########................................................................................................................] 8Unpacking libnghttp2-14:arm64 (1.43.0-1ubuntu0.2) ...
7[24;0f[42m[30mProgress: [ 10%][49m[39m [###########..............................................................................................................] 8Selecting previously unselected package libpsl5:arm64.
Preparing to unpack .../03-libpsl5_0.21.0-1.2build2_arm64.deb ...
7[24;0f[42m[30mProgress: [ 11%][49m[39m [#############............................................................................................................] 8Unpacking libpsl5:arm64 (0.21.0-1.2build2) ...
7[24;0f[42m[30mProgress: [ 13%][49m[39m [###############..........................................................................................................] 8Selecting previously unselected package publicsuffix.
Preparing to unpack .../04-publicsuffix_20211207.1025-1_all.deb ...
7[24;0f[42m[30mProgress: [ 15%][49m[39m [#################........................................................................................................] 8Unpacking publicsuffix (20211207.1025-1) ...
7[24;0f[42m[30mProgress: [ 16%][49m[39m [###################......................................................................................................] 8Selecting previously unselected package libbrotli1:arm64.
Preparing to unpack .../05-libbrotli1_1.0.9-2build6_arm64.deb ...
7[24;0f[42m[30mProgress: [ 18%][49m[39m [#####################....................................................................................................] 8Unpacking libbrotli1:arm64 (1.0.9-2build6) ...
7[24;0f[42m[30mProgress: [ 20%][49m[39m [#######################..................................................................................................] 8Selecting previously unselected package libsasl2-modules-db:arm64.
Preparing to unpack .../06-libsasl2-modules-db_2.1.27+dfsg2-3ubuntu1.2_arm64.deb ...
7[24;0f[42m[30mProgress: [ 21%][49m[39m [#########################................................................................................................] 8Unpacking libsasl2-modules-db:arm64 (2.1.27+dfsg2-3ubuntu1.2) ...
7[24;0f[42m[30mProgress: [ 23%][49m[39m [###########################..............................................................................................] 8Selecting previously unselected package libsasl2-2:arm64.
Preparing to unpack .../07-libsasl2-2_2.1.27+dfsg2-3ubuntu1.2_arm64.deb ...
7[24;0f[42m[30mProgress: [ 25%][49m[39m [#############################............................................................................................] 8Unpacking libsasl2-2:arm64 (2.1.27+dfsg2-3ubuntu1.2) ...
7[24;0f[42m[30mProgress: [ 26%][49m[39m [###############################..........................................................................................] 8Selecting previously unselected package libldap-2.5-0:arm64.
Preparing to unpack .../08-libldap-2.5-0_2.5.18+dfsg-0ubuntu0.22.04.2_arm64.deb ...
7[24;0f[42m[30mProgress: [ 28%][49m[39m [#################################........................................................................................] 8Unpacking libldap-2.5-0:arm64 (2.5.18+dfsg-0ubuntu0.22.04.2) ...
7[24;0f[42m[30mProgress: [ 30%][49m[39m [###################################......................................................................................] 8Selecting previously unselected package librtmp1:arm64.
Preparing to unpack .../09-librtmp1_2.4+20151223.gitfa8646d.1-2build4_arm64.deb ...
7[24;0f[42m[30mProgress: [ 31%][49m[39m [#####################################....................................................................................] 8Unpacking librtmp1:arm64 (2.4+20151223.gitfa8646d.1-2build4) ...
7[24;0f[42m[30mProgress: [ 33%][49m[39m [#######################################..................................................................................] 8Selecting previously unselected package libssh-4:arm64.
Preparing to unpack .../10-libssh-4_0.9.6-2ubuntu0.22.04.3_arm64.deb ...
7[24;0f[42m[30mProgress: [ 34%][49m[39m [#########################################................................................................................] 8Unpacking libssh-4:arm64 (0.9.6-2ubuntu0.22.04.3) ...
7[24;0f[42m[30mProgress: [ 36%][49m[39m [###########################################..............................................................................] 8Selecting previously unselected package libcurl4:arm64.
Preparing to unpack .../11-libcurl4_7.81.0-1ubuntu1.20_arm64.deb ...
7[24;0f[42m[30mProgress: [ 38%][49m[39m [#############################################............................................................................] 8Unpacking libcurl4:arm64 (7.81.0-1ubuntu1.20) ...
7[24;0f[42m[30mProgress: [ 39%][49m[39m [###############################################..........................................................................] 8Selecting previously unselected package curl.
Preparing to unpack .../12-curl_7.81.0-1ubuntu1.20_arm64.deb ...
7[24;0f[42m[30mProgress: [ 41%][49m[39m [#################################################........................................................................] 8Unpacking curl (7.81.0-1ubuntu1.20) ...
7[24;0f[42m[30mProgress: [ 43%][49m[39m [###################################################......................................................................] 8Selecting previously unselected package libldap-common.
Preparing to unpack .../13-libldap-common_2.5.18+dfsg-0ubuntu0.22.04.2_all.deb ...
7[24;0f[42m[30mProgress: [ 44%][49m[39m [#####################################################....................................................................] 8Unpacking libldap-common (2.5.18+dfsg-0ubuntu0.22.04.2) ...
7[24;0f[42m[30mProgress: [ 46%][49m[39m [#######################################################..................................................................] 8Selecting previously unselected package libsasl2-modules:arm64.
Preparing to unpack .../14-libsasl2-modules_2.1.27+dfsg2-3ubuntu1.2_arm64.deb ...
7[24;0f[42m[30mProgress: [ 48%][49m[39m [#########################################################................................................................] 8Unpacking libsasl2-modules:arm64 (2.1.27+dfsg2-3ubuntu1.2) ...
7[24;0f[42m[30mProgress: [ 49%][49m[39m [###########################################################..............................................................] 8Setting up libpsl5:arm64 (0.21.0-1.2build2) ...
7[24;0f[42m[30mProgress: [ 51%][49m[39m [#############################################################............................................................] 87[24;0f[42m[30mProgress: [ 52%][49m[39m [###############################################################..........................................................] 8Setting up libbrotli1:arm64 (1.0.9-2build6) ...
7[24;0f[42m[30mProgress: [ 54%][49m[39m [#################################################################........................................................] 87[24;0f[42m[30mProgress: [ 56%][49m[39m [###################################################################......................................................] 8Setting up libsasl2-modules:arm64 (2.1.27+dfsg2-3ubuntu1.2) ...
7[24;0f[42m[30mProgress: [ 57%][49m[39m [#####################################################################....................................................] 87[24;0f[42m[30mProgress: [ 59%][49m[39m [#######################################################################..................................................] 8Setting up libnghttp2-14:arm64 (1.43.0-1ubuntu0.2) ...
7[24;0f[42m[30mProgress: [ 61%][49m[39m [#########################################################################................................................] 87[24;0f[42m[30mProgress: [ 62%][49m[39m [###########################################################################..............................................] 8Setting up libldap-common (2.5.18+dfsg-0ubuntu0.22.04.2) ...
7[24;0f[42m[30mProgress: [ 64%][49m[39m [#############################################################################............................................] 87[24;0f[42m[30mProgress: [ 66%][49m[39m [###############################################################################..........................................] 8Setting up libsasl2-modules-db:arm64 (2.1.27+dfsg2-3ubuntu1.2) ...
7[24;0f[42m[30mProgress: [ 67%][49m[39m [#################################################################################........................................] 87[24;0f[42m[30mProgress: [ 69%][49m[39m [###################################################################################......................................] 8Setting up librtmp1:arm64 (2.4+20151223.gitfa8646d.1-2build4) ...
7[24;0f[42m[30mProgress: [ 70%][49m[39m [#####################################################################################....................................] 87[24;0f[42m[30mProgress: [ 72%][49m[39m [#######################################################################################..................................] 8Setting up libsasl2-2:arm64 (2.1.27+dfsg2-3ubuntu1.2) ...
7[24;0f[42m[30mProgress: [ 74%][49m[39m [#########################################################################################................................] 87[24;0f[42m[30mProgress: [ 75%][49m[39m [###########################################################################################..............................] 8Setting up libssh-4:arm64 (0.9.6-2ubuntu0.22.04.3) ...
7[24;0f[42m[30mProgress: [ 77%][49m[39m [#############################################################################################............................] 87[24;0f[42m[30mProgress: [ 79%][49m[39m [###############################################################################################..........................] 8Setting up openssl (3.0.2-0ubuntu1.18) ...
7[24;0f[42m[30mProgress: [ 80%][49m[39m [#################################################################################################........................] 87[24;0f[42m[30mProgress: [ 82%][49m[39m [###################################################################################################......................] 8Setting up publicsuffix (20211207.1025-1) ...
7[24;0f[42m[30mProgress: [ 84%][49m[39m [#####################################################################################################....................] 87[24;0f[42m[30mProgress: [ 85%][49m[39m [#######################################################################################################..................] 8Setting up libldap-2.5-0:arm64 (2.5.18+dfsg-0ubuntu0.22.04.2) ...
7[24;0f[42m[30mProgress: [ 87%][49m[39m [#########################################################################################################................] 87[24;0f[42m[30mProgress: [ 89%][49m[39m [###########################################################################################################..............] 8Setting up ca-certificates (20240203~22.04.1) ...
7[24;0f[42m[30mProgress: [ 90%][49m[39m [#############################################################################################################............] 8debconf: unable to initialize frontend: Dialog
debconf: (No usable dialog-like program is installed, so the dialog based frontend cannot be used. at /usr/share/perl5/Debconf/FrontEnd/Dialog.pm line 78.)
debconf: falling back to frontend: Readline
debconf: unable to initialize frontend: Readline
debconf: (Can't locate Term/ReadLine.pm in @INC (you may need to install the Term::ReadLine module) (@INC contains: /etc/perl /usr/local/lib/aarch64-linux-gnu/perl/5.34.0 /usr/local/share/perl/5.34.0 /usr/lib/aarch64-linux-gnu/perl5/5.34 /usr/share/perl5 /usr/lib/aarch64-linux-gnu/perl-base /usr/lib/aarch64-linux-gnu/perl/5.34 /usr/share/perl/5.34 /usr/local/lib/site_perl) at /usr/share/perl5/Debconf/FrontEnd/Readline.pm line 7.)
debconf: falling back to frontend: Teletype
Updating certificates in /etc/ssl/certs...
146 added, 0 removed; done.
7[24;0f[42m[30mProgress: [ 92%][49m[39m [###############################################################################################################..........] 8Setting up libcurl4:arm64 (7.81.0-1ubuntu1.20) ...
7[24;0f[42m[30mProgress: [ 92%][49m[39m [###############################################################################################################..........] 8Setting up curl (7.81.0-1ubuntu1.20) ...
7[24;0f[42m[30mProgress: [ 94%][49m[39m [#################################################################################################################........] 87[24;0f[42m[30mProgress: [ 95%][49m[39m [###################################################################################################################......] 8Processing triggers for libc-bin (2.35-0ubuntu3.6) ...
Processing triggers for ca-certificates (20240203~22.04.1) ...
7[24;0f[42m[30mProgress: [ 97%][49m[39m [#####################################################################################################################....] 8Updating certificates in /etc/ssl/certs...
0 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d...
done.
7[24;0f[42m[30mProgress: [ 98%][49m[39m [#######################################################################################################################..] 8
7[0;24r8[1A[J[?2004h]0;root@590c8e7bb663: /root@590c8e7bb663:/# [H[2J]0;root@590c8e7bb663: /root@590c8e7bb663:/# [7mcurl -sL https://deb.nodesource.com/setup_20.x | bash[27m]0;root@590c8e7bb663: /root@590c8e7bb663:/# curl -sL https://deb.nodesource.com/setup_20.x | bash
[?2004l[38;5;79m2025-02-18 17:00:54 - Installing pre-requisites[0m
0% [Working]            Hit:1 http://ports.ubuntu.com/ubuntu-ports jammy InRelease
0% [Working]            Hit:2 http://ports.ubuntu.com/ubuntu-ports jammy-updates InRelease
0% [Working]0% [Waiting for headers]                        Hit:3 http://ports.ubuntu.com/ubuntu-ports jammy-backports InRelease
                        0% [Working]0% [Waiting for headers]                        Hit:4 http://ports.ubuntu.com/ubuntu-ports jammy-security InRelease
                        0% [Working]0% [Working]20% [Working]             Reading package lists... 0%Reading package lists... 0%Reading package lists... 0%Reading package lists... 4%Reading package lists... 4%Reading package lists... 5%Reading package lists... 5%Reading package lists... 52%Reading package lists... 52%Reading package lists... 52%Reading package lists... 52%Reading package lists... 61%Reading package lists... 61%Reading package lists... 72%Reading package lists... 72%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 85%Reading package lists... 85%Reading package lists... 95%Reading package lists... 95%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... Done
Reading package lists... 0%Reading package lists... 0%Reading package lists... 0%Reading package lists... 4%Reading package lists... 4%Reading package lists... 5%Reading package lists... 5%Reading package lists... 52%Reading package lists... 52%Reading package lists... 52%Reading package lists... 52%Reading package lists... 61%Reading package lists... 61%Reading package lists... 72%Reading package lists... 72%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 85%Reading package lists... 85%Reading package lists... 95%Reading package lists... 95%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... Done
Building dependency tree... 0%Building dependency tree... 0%Building dependency tree... 50%Building dependency tree... 50%Building dependency tree... Done
Reading state information... 0% Reading state information... 6%Reading state information... Done
ca-certificates is already the newest version (20240203~22.04.1).
ca-certificates set to manually installed.
curl is already the newest version (7.81.0-1ubuntu1.20).
The following additional packages will be installed:
  dirmngr gnupg-l10n gnupg-utils gpg gpg-agent gpg-wks-client gpg-wks-server gpgconf gpgsm libassuan0 libksba8 libnpth0 libreadline8
  libsqlite3-0 pinentry-curses readline-common
Suggested packages:
  dbus-user-session libpam-systemd pinentry-gnome3 tor parcimonie xloadimage scdaemon pinentry-doc readline-doc
The following NEW packages will be installed:
  apt-transport-https dirmngr gnupg gnupg-l10n gnupg-utils gpg gpg-agent gpg-wks-client gpg-wks-server gpgconf gpgsm libassuan0 libksba8
  libnpth0 libreadline8 libsqlite3-0 pinentry-curses readline-common
0 upgraded, 18 newly installed, 0 to remove and 21 not upgraded.
Need to get 3113 kB of archives.
After this operation, 7938 kB of additional disk space will be used.
0% [Working]            Get:1 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 readline-common all 8.1.2-1 [53.5 kB]
0% [1 readline-common 5492 B/53.5 kB 10%]                                         2% [Working]            Get:2 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 libreadline8 arm64 8.1.2-1 [153 kB]
3% [2 libreadline8 14.2 kB/153 kB 9%]                                     8% [Connecting to ports.ubuntu.com]                                   Get:3 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libsqlite3-0 arm64 3.37.2-2ubuntu0.3 [635 kB]
8% [3 libsqlite3-0 1146 B/635 kB 0%]25% [Connecting to ports.ubuntu.com]                                    Get:4 http://ports.ubuntu.com/ubuntu-ports jammy-updates/universe arm64 apt-transport-https all 2.4.13 [1510 B]
26% [Connecting to ports.ubuntu.com]                                    Get:5 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 libassuan0 arm64 2.5.5-1build1 [36.5 kB]
26% [5 libassuan0 4044 B/36.5 kB 11%]                                     28% [Connecting to ports.ubuntu.com]                                    Get:6 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 gpgconf arm64 2.2.27-3ubuntu2.1 [92.5 kB]
                                    28% [6 gpgconf 4043 B/92.5 kB 4%]32% [Connecting to ports.ubuntu.com]                                    Get:7 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libksba8 arm64 1.6.0-2ubuntu0.2 [117 kB]
                                    32% [7 libksba8 2594 B/117 kB 2%]36% [Connecting to ports.ubuntu.com]                                    Get:8 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 libnpth0 arm64 1.6-3build2 [8156 B]
                                    36% [8 libnpth0 8156 B/8156 B 100%]37% [Connecting to ports.ubuntu.com]                                    Get:9 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 dirmngr arm64 2.2.27-3ubuntu2.1 [289 kB]
                                    37% [9 dirmngr 4042 B/289 kB 1%]46% [Connecting to ports.ubuntu.com]                                    Get:10 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 gnupg-l10n all 2.2.27-3ubuntu2.1 [54.4 kB]
46% [10 gnupg-l10n 12.3 kB/54.4 kB 23%]                                       48% [Connecting to ports.ubuntu.com]                                    Get:11 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 gnupg-utils arm64 2.2.27-3ubuntu2.1 [304 kB]
48% [11 gnupg-utils 5490 B/304 kB 2%]                                     57% [Connecting to ports.ubuntu.com]                                    Get:12 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 gpg arm64 2.2.27-3ubuntu2.1 [506 kB]
                                    57% [12 gpg 5490 B/506 kB 1%]71% [Connecting to ports.ubuntu.com]                                    Get:13 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 pinentry-curses arm64 1.1.1-1build2 [33.5 kB]
71% [13 pinentry-curses 8388 B/33.5 kB 25%]                                           73% [Connecting to ports.ubuntu.com]                                    Get:14 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 gpg-agent arm64 2.2.27-3ubuntu2.1 [204 kB]
                                    73% [14 gpg-agent 4042 B/204 kB 2%]80% [Connecting to ports.ubuntu.com]                                    Get:15 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 gpg-wks-client arm64 2.2.27-3ubuntu2.1 [61.4 kB]
80% [15 gpg-wks-client 9836 B/61.4 kB 16%]                                          82% [Connecting to ports.ubuntu.com]                                    Get:16 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 gpg-wks-server arm64 2.2.27-3ubuntu2.1 [56.8 kB]
82% [16 gpg-wks-server 2596 B/56.8 kB 5%]                                         85% [Connecting to ports.ubuntu.com]                                    Get:17 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 gpgsm arm64 2.2.27-3ubuntu2.1 [192 kB]
                                    85% [17 gpgsm 6938 B/192 kB 4%]91% [Connecting to ports.ubuntu.com]                                    Get:18 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 gnupg all 2.2.27-3ubuntu2.1 [315 kB]
                                    91% [18 gnupg 4042 B/315 kB 1%]                               100% [Working]              Fetched 3113 kB in 4s (693 kB/s)
debconf: delaying package configuration, since apt-utils is not installed
Selecting previously unselected package readline-common.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 5055 files and directories currently installed.)
Preparing to unpack .../00-readline-common_8.1.2-1_all.deb ...
Unpacking readline-common (8.1.2-1) ...
Selecting previously unselected package libreadline8:arm64.
Preparing to unpack .../01-libreadline8_8.1.2-1_arm64.deb ...
Unpacking libreadline8:arm64 (8.1.2-1) ...
Selecting previously unselected package libsqlite3-0:arm64.
Preparing to unpack .../02-libsqlite3-0_3.37.2-2ubuntu0.3_arm64.deb ...
Unpacking libsqlite3-0:arm64 (3.37.2-2ubuntu0.3) ...
Selecting previously unselected package apt-transport-https.
Preparing to unpack .../03-apt-transport-https_2.4.13_all.deb ...
Unpacking apt-transport-https (2.4.13) ...
Selecting previously unselected package libassuan0:arm64.
Preparing to unpack .../04-libassuan0_2.5.5-1build1_arm64.deb ...
Unpacking libassuan0:arm64 (2.5.5-1build1) ...
Selecting previously unselected package gpgconf.
Preparing to unpack .../05-gpgconf_2.2.27-3ubuntu2.1_arm64.deb ...
Unpacking gpgconf (2.2.27-3ubuntu2.1) ...
Selecting previously unselected package libksba8:arm64.
Preparing to unpack .../06-libksba8_1.6.0-2ubuntu0.2_arm64.deb ...
Unpacking libksba8:arm64 (1.6.0-2ubuntu0.2) ...
Selecting previously unselected package libnpth0:arm64.
Preparing to unpack .../07-libnpth0_1.6-3build2_arm64.deb ...
Unpacking libnpth0:arm64 (1.6-3build2) ...
Selecting previously unselected package dirmngr.
Preparing to unpack .../08-dirmngr_2.2.27-3ubuntu2.1_arm64.deb ...
Unpacking dirmngr (2.2.27-3ubuntu2.1) ...
Selecting previously unselected package gnupg-l10n.
Preparing to unpack .../09-gnupg-l10n_2.2.27-3ubuntu2.1_all.deb ...
Unpacking gnupg-l10n (2.2.27-3ubuntu2.1) ...
Selecting previously unselected package gnupg-utils.
Preparing to unpack .../10-gnupg-utils_2.2.27-3ubuntu2.1_arm64.deb ...
Unpacking gnupg-utils (2.2.27-3ubuntu2.1) ...
Selecting previously unselected package gpg.
Preparing to unpack .../11-gpg_2.2.27-3ubuntu2.1_arm64.deb ...
Unpacking gpg (2.2.27-3ubuntu2.1) ...
Selecting previously unselected package pinentry-curses.
Preparing to unpack .../12-pinentry-curses_1.1.1-1build2_arm64.deb ...
Unpacking pinentry-curses (1.1.1-1build2) ...
Selecting previously unselected package gpg-agent.
Preparing to unpack .../13-gpg-agent_2.2.27-3ubuntu2.1_arm64.deb ...
Unpacking gpg-agent (2.2.27-3ubuntu2.1) ...
Selecting previously unselected package gpg-wks-client.
Preparing to unpack .../14-gpg-wks-client_2.2.27-3ubuntu2.1_arm64.deb ...
Unpacking gpg-wks-client (2.2.27-3ubuntu2.1) ...
Selecting previously unselected package gpg-wks-server.
Preparing to unpack .../15-gpg-wks-server_2.2.27-3ubuntu2.1_arm64.deb ...
Unpacking gpg-wks-server (2.2.27-3ubuntu2.1) ...
Selecting previously unselected package gpgsm.
Preparing to unpack .../16-gpgsm_2.2.27-3ubuntu2.1_arm64.deb ...
Unpacking gpgsm (2.2.27-3ubuntu2.1) ...
Selecting previously unselected package gnupg.
Preparing to unpack .../17-gnupg_2.2.27-3ubuntu2.1_all.deb ...
Unpacking gnupg (2.2.27-3ubuntu2.1) ...
Setting up libksba8:arm64 (1.6.0-2ubuntu0.2) ...
Setting up apt-transport-https (2.4.13) ...
Setting up libsqlite3-0:arm64 (3.37.2-2ubuntu0.3) ...
Setting up libnpth0:arm64 (1.6-3build2) ...
Setting up libassuan0:arm64 (2.5.5-1build1) ...
Setting up gnupg-l10n (2.2.27-3ubuntu2.1) ...
Setting up readline-common (8.1.2-1) ...
Setting up pinentry-curses (1.1.1-1build2) ...
Setting up libreadline8:arm64 (8.1.2-1) ...
Setting up gpgconf (2.2.27-3ubuntu2.1) ...
Setting up gpg (2.2.27-3ubuntu2.1) ...
Setting up gnupg-utils (2.2.27-3ubuntu2.1) ...
Setting up gpg-agent (2.2.27-3ubuntu2.1) ...
Setting up gpgsm (2.2.27-3ubuntu2.1) ...
Setting up dirmngr (2.2.27-3ubuntu2.1) ...
Setting up gpg-wks-server (2.2.27-3ubuntu2.1) ...
Setting up gpg-wks-client (2.2.27-3ubuntu2.1) ...
Setting up gnupg (2.2.27-3ubuntu2.1) ...
Processing triggers for libc-bin (2.35-0ubuntu3.6) ...
0% [Working]            Hit:1 http://ports.ubuntu.com/ubuntu-ports jammy InRelease
0% [Waiting for headers]                        Get:2 https://deb.nodesource.com/node_20.x nodistro InRelease [12.1 kB]
0% [Waiting for headers] [2 InRelease 12.1 kB/12.1 kB 100%]                                                           0% [Waiting for headers]                        Hit:3 http://ports.ubuntu.com/ubuntu-ports jammy-updates InRelease
                        0% [Working]0% [Waiting for headers]0% [Waiting for headers]                        Hit:4 http://ports.ubuntu.com/ubuntu-ports jammy-backports InRelease
0% [Waiting for headers]0% [Waiting for headers] [Waiting for headers]                                              Hit:5 http://ports.ubuntu.com/ubuntu-ports jammy-security InRelease
                                              0% [Waiting for headers]0% [Waiting for headers]                        Get:6 https://deb.nodesource.com/node_20.x nodistro/main arm64 Packages [10.7 kB]
0% [6 Packages 2265 B/10.7 kB 21%]                                  0% [Working]0% [6 Packages store 0 B]                         0% [Working]100% [Working]              Fetched 22.8 kB in 1s (42.6 kB/s)
Reading package lists... 0%Reading package lists... 0%Reading package lists... 0%Reading package lists... 4%Reading package lists... 4%Reading package lists... 5%Reading package lists... 5%Reading package lists... 52%Reading package lists... 52%Reading package lists... 52%Reading package lists... 52%Reading package lists... 61%Reading package lists... 61%Reading package lists... 72%Reading package lists... 72%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 85%Reading package lists... 85%Reading package lists... 95%Reading package lists... 95%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... Done
[1;34m2025-02-18 17:01:03 - Repository configured successfully.[0m
[38;5;79m2025-02-18 17:01:03 - To install Node.js, run: apt-get install nodejs -y[0m
[38;5;79m2025-02-18 17:01:03 - You can use N|solid Runtime as a node.js alternative[0m
[1;32m2025-02-18 17:01:03 - To install N|solid Runtime, run: apt-get install nsolid -y 
[0m
[?2004h]0;root@590c8e7bb663: /root@590c8e7bb663:/# [K[7mapt install -y nodejs[27mapt install -y nodejs
[?2004lReading package lists... 0%Reading package lists... 0%Reading package lists... 0%Reading package lists... 4%Reading package lists... 4%Reading package lists... 5%Reading package lists... 5%Reading package lists... 52%Reading package lists... 52%Reading package lists... 52%Reading package lists... 52%Reading package lists... 61%Reading package lists... 61%Reading package lists... 72%Reading package lists... 72%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 77%Reading package lists... 85%Reading package lists... 85%Reading package lists... 95%Reading package lists... 95%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... 99%Reading package lists... Done
Building dependency tree... 0%Building dependency tree... 0%Building dependency tree... 50%Building dependency tree... 50%Building dependency tree... Done
Reading state information... 0% Reading state information... 3%Reading state information... Done
The following additional packages will be installed:
  libexpat1 libmpdec3 libpython3-stdlib libpython3.10-minimal libpython3.10-stdlib media-types python3 python3-minimal python3.10
  python3.10-minimal
Suggested packages:
  python3-doc python3-tk python3-venv python3.10-venv python3.10-doc binutils binfmt-support
The following NEW packages will be installed:
  libexpat1 libmpdec3 libpython3-stdlib libpython3.10-minimal libpython3.10-stdlib media-types nodejs python3 python3-minimal python3.10
  python3.10-minimal
0 upgraded, 11 newly installed, 0 to remove and 21 not upgraded.
Need to get 36.6 MB of archives.
After this operation, 216 MB of additional disk space will be used.
[33m0% [Working][0m            Get:1 https://deb.nodesource.com/node_20.x nodistro/main arm64 nodejs arm64 20.18.3-1nodesource1 [30.9 MB]
[33m0% [Waiting for headers] [1 nodejs 792 B/30.9 MB 0%][0m                                                    Get:2 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libpython3.10-minimal arm64 3.10.12-1~22.04.8 [812 kB]
[33m0% [2 libpython3.10-minimal 1146 B/812 kB 0%] [1 nodejs 65.0 kB/30.9 MB 0%][0m[33m6% [2 libpython3.10-minimal 260 kB/812 kB 32%] [1 nodejs 2341 kB/30.9 MB 8%][0m[33m                                                                            13% [1 nodejs 4209 kB/30.9 MB 14%][0m                                  Get:3 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libexpat1 arm64 2.4.7-1ubuntu0.5 [77.5 kB]
[33m15% [3 libexpat1 1147 B/77.5 kB 1%] [1 nodejs 5094 kB/30.9 MB 16%][0m[33m                                                                  19% [1 nodejs 6028 kB/30.9 MB 19%][0m                                  Get:4 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 python3.10-minimal arm64 3.10.12-1~22.04.8 [2263 kB]
[33m21% [4 python3.10-minimal 1144 B/2263 kB 0%] [1 nodejs 6896 kB/30.9 MB 22%][0m[33m26% [4 python3.10-minimal 395 kB/2263 kB 17%] [1 nodejs 9124 kB/30.9 MB 30%][0m[33m32% [4 python3.10-minimal 1235 kB/2263 kB 55%] [1 nodejs 11.1 MB/30.9 MB 36%][0m[33m37% [4 python3.10-minimal 1999 kB/2263 kB 88%] [1 nodejs 12.6 MB/30.9 MB 41%][0m[33m                                                                             41% [1 nodejs 13.1 MB/30.9 MB 42%][0m                                  Get:5 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 python3-minimal arm64 3.10.6-1~22.04.1 [24.3 kB]
[33m43% [5 python3-minimal 1148 B/24.3 kB 5%] [1 nodejs 13.9 MB/30.9 MB 45%][0m[33m                                                                        45% [1 nodejs 14.3 MB/30.9 MB 46%][0m                                  Get:6 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 media-types all 7.0.0 [25.5 kB]
[33m47% [6 media-types 1148 B/25.5 kB 5%] [1 nodejs 15.0 MB/30.9 MB 49%][0m[33m                                                                    50% [1 nodejs 15.3 MB/30.9 MB 50%][0m                                  Get:7 http://ports.ubuntu.com/ubuntu-ports jammy/main arm64 libmpdec3 arm64 2.5.1-2build2 [89.0 kB]
[33m51% [7 libmpdec3 1147 B/89.0 kB 1%] [1 nodejs 16.1 MB/30.9 MB 52%][0m[33m56% [Connecting to ports.ubuntu.com] [1 nodejs 17.2 MB/30.9 MB 56%][0m                                                                   Get:8 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libpython3.10-stdlib arm64 3.10.12-1~22.04.8 [1846 kB]
[33m58% [8 libpython3.10-stdlib 1144 B/1846 kB 0%] [1 nodejs 18.3 MB/30.9 MB 59%][0m[33m64% [8 libpython3.10-stdlib 382 kB/1846 kB 21%] [1 nodejs 20.8 MB/30.9 MB 67%][0m[33m69% [8 libpython3.10-stdlib 1051 kB/1846 kB 57%] [1 nodejs 22.2 MB/30.9 MB 72%][0m[33m                                                                               76% [Connecting to ports.ubuntu.com] [1 nodejs 24.0 MB/30.9 MB 77%][0m                                                                   Get:9 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 python3.10 arm64 3.10.12-1~22.04.8 [508 kB]
[33m                                                                   78% [9 python3.10 2594 B/508 kB 1%] [1 nodejs 24.8 MB/30.9 MB 80%][0m[33m84% [9 python3.10 360 kB/508 kB 71%] [1 nodejs 27.3 MB/30.9 MB 88%]                                                               5374 kB/s 0s[0m[33m88% [1 nodejs 27.8 MB/30.9 MB 90%]                                                                                                5374 kB/s 0s[0m                                                                                                                                              Get:10 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 libpython3-stdlib arm64 3.10.6-1~22.04.1 [6812 B]
[33m90% [10 libpython3-stdlib 1149 B/6812 B 17%] [1 nodejs 28.9 MB/30.9 MB 94%]                                                       5374 kB/s 0s[0m[33m92% [1 nodejs 29.0 MB/30.9 MB 94%]                                                                                                5374 kB/s 0s[0m                                                                                                                                              Get:11 http://ports.ubuntu.com/ubuntu-ports jammy-updates/main arm64 python3 arm64 3.10.6-1~22.04.1 [22.8 kB]
[33m95% [11 python3 1148 B/22.8 kB 5%] [1 nodejs 30.2 MB/30.9 MB 98%]                                                                 5374 kB/s 0s[0m[33m98% [1 nodejs 30.8 MB/30.9 MB 100%]                                                                                               5374 kB/s 0s[0m[33m100% [Working]                                                                                                                    5374 kB/s 0s[0m                                                                                                                                              Fetched 36.6 MB in 7s (5397 kB/s)
debconf: delaying package configuration, since apt-utils is not installed

7[0;23r8[1ASelecting previously unselected package libpython3.10-minimal:arm64.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 5300 files and directories currently installed.)
Preparing to unpack .../libpython3.10-minimal_3.10.12-1~22.04.8_arm64.deb ...
7[24;0f[42m[30mProgress: [  0%][49m[39m [.........................................................................................................................] 87[24;0f[42m[30mProgress: [  2%][49m[39m [##.......................................................................................................................] 8Unpacking libpython3.10-minimal:arm64 (3.10.12-1~22.04.8) ...
7[24;0f[42m[30mProgress: [  4%][49m[39m [#####....................................................................................................................] 8Selecting previously unselected package libexpat1:arm64.
Preparing to unpack .../libexpat1_2.4.7-1ubuntu0.5_arm64.deb ...
7[24;0f[42m[30mProgress: [  7%][49m[39m [########.................................................................................................................] 8Unpacking libexpat1:arm64 (2.4.7-1ubuntu0.5) ...
7[24;0f[42m[30mProgress: [  9%][49m[39m [##########...............................................................................................................] 8Selecting previously unselected package python3.10-minimal.
Preparing to unpack .../python3.10-minimal_3.10.12-1~22.04.8_arm64.deb ...
7[24;0f[42m[30mProgress: [ 11%][49m[39m [#############............................................................................................................] 8Unpacking python3.10-minimal (3.10.12-1~22.04.8) ...
7[24;0f[42m[30mProgress: [ 13%][49m[39m [################.........................................................................................................] 8Setting up libpython3.10-minimal:arm64 (3.10.12-1~22.04.8) ...
7[24;0f[42m[30mProgress: [ 16%][49m[39m [##################.......................................................................................................] 87[24;0f[42m[30mProgress: [ 18%][49m[39m [#####################....................................................................................................] 8Setting up libexpat1:arm64 (2.4.7-1ubuntu0.5) ...
7[24;0f[42m[30mProgress: [ 20%][49m[39m [########################.................................................................................................] 87[24;0f[42m[30mProgress: [ 22%][49m[39m [##########################...............................................................................................] 8Setting up python3.10-minimal (3.10.12-1~22.04.8) ...
7[24;0f[42m[30mProgress: [ 24%][49m[39m [#############################............................................................................................] 87[24;0f[42m[30mProgress: [ 27%][49m[39m [################################.........................................................................................] 8Selecting previously unselected package python3-minimal.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 5604 files and directories currently installed.)
Preparing to unpack .../0-python3-minimal_3.10.6-1~22.04.1_arm64.deb ...
7[24;0f[42m[30mProgress: [ 29%][49m[39m [##################################.......................................................................................] 8Unpacking python3-minimal (3.10.6-1~22.04.1) ...
7[24;0f[42m[30mProgress: [ 31%][49m[39m [#####################################....................................................................................] 8Selecting previously unselected package media-types.
Preparing to unpack .../1-media-types_7.0.0_all.deb ...
7[24;0f[42m[30mProgress: [ 33%][49m[39m [########################################.................................................................................] 8Unpacking media-types (7.0.0) ...
7[24;0f[42m[30mProgress: [ 36%][49m[39m [###########################################..............................................................................] 8Selecting previously unselected package libmpdec3:arm64.
Preparing to unpack .../2-libmpdec3_2.5.1-2build2_arm64.deb ...
7[24;0f[42m[30mProgress: [ 38%][49m[39m [#############################################............................................................................] 8Unpacking libmpdec3:arm64 (2.5.1-2build2) ...
7[24;0f[42m[30mProgress: [ 40%][49m[39m [################################################.........................................................................] 8Selecting previously unselected package libpython3.10-stdlib:arm64.
Preparing to unpack .../3-libpython3.10-stdlib_3.10.12-1~22.04.8_arm64.deb ...
7[24;0f[42m[30mProgress: [ 42%][49m[39m [###################################################......................................................................] 8Unpacking libpython3.10-stdlib:arm64 (3.10.12-1~22.04.8) ...
7[24;0f[42m[30mProgress: [ 44%][49m[39m [#####################################################....................................................................] 8Selecting previously unselected package python3.10.
Preparing to unpack .../4-python3.10_3.10.12-1~22.04.8_arm64.deb ...
7[24;0f[42m[30mProgress: [ 47%][49m[39m [########################################################.................................................................] 8Unpacking python3.10 (3.10.12-1~22.04.8) ...
7[24;0f[42m[30mProgress: [ 49%][49m[39m [###########################################################..............................................................] 8Selecting previously unselected package libpython3-stdlib:arm64.
Preparing to unpack .../5-libpython3-stdlib_3.10.6-1~22.04.1_arm64.deb ...
7[24;0f[42m[30mProgress: [ 51%][49m[39m [#############################################################............................................................] 8Unpacking libpython3-stdlib:arm64 (3.10.6-1~22.04.1) ...
7[24;0f[42m[30mProgress: [ 53%][49m[39m [################################################################.........................................................] 8Setting up python3-minimal (3.10.6-1~22.04.1) ...
7[24;0f[42m[30mProgress: [ 56%][49m[39m [###################################################################......................................................] 87[24;0f[42m[30mProgress: [ 58%][49m[39m [#####################################################################....................................................] 8Selecting previously unselected package python3.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 6006 files and directories currently installed.)
Preparing to unpack .../python3_3.10.6-1~22.04.1_arm64.deb ...
7[24;0f[42m[30mProgress: [ 60%][49m[39m [########################################################################.................................................] 8Unpacking python3 (3.10.6-1~22.04.1) ...
7[24;0f[42m[30mProgress: [ 62%][49m[39m [###########################################################################..............................................] 8Selecting previously unselected package nodejs.
Preparing to unpack .../nodejs_20.18.3-1nodesource1_arm64.deb ...
7[24;0f[42m[30mProgress: [ 64%][49m[39m [#############################################################################............................................] 8Unpacking nodejs (20.18.3-1nodesource1) ...
7[24;0f[42m[30mProgress: [ 67%][49m[39m [################################################################################.........................................] 8Setting up media-types (7.0.0) ...
7[24;0f[42m[30mProgress: [ 69%][49m[39m [###################################################################################......................................] 87[24;0f[42m[30mProgress: [ 71%][49m[39m [######################################################################################...................................] 8Setting up libmpdec3:arm64 (2.5.1-2build2) ...
7[24;0f[42m[30mProgress: [ 73%][49m[39m [########################################################################################.................................] 87[24;0f[42m[30mProgress: [ 76%][49m[39m [###########################################################################################..............................] 8Setting up libpython3.10-stdlib:arm64 (3.10.12-1~22.04.8) ...
7[24;0f[42m[30mProgress: [ 78%][49m[39m [##############################################################################################...........................] 87[24;0f[42m[30mProgress: [ 80%][49m[39m [################################################################################################.........................] 8Setting up libpython3-stdlib:arm64 (3.10.6-1~22.04.1) ...
7[24;0f[42m[30mProgress: [ 82%][49m[39m [###################################################################################################......................] 87[24;0f[42m[30mProgress: [ 84%][49m[39m [######################################################################################################...................] 8Setting up python3.10 (3.10.12-1~22.04.8) ...
7[24;0f[42m[30mProgress: [ 87%][49m[39m [########################################################################################################.................] 87[24;0f[42m[30mProgress: [ 89%][49m[39m [###########################################################################################################..............] 8Setting up python3 (3.10.6-1~22.04.1) ...
7[24;0f[42m[30mProgress: [ 91%][49m[39m [##############################################################################################################...........] 8running python rtupdate hooks for python3.10...
running python post-rtupdate hooks for python3.10...
7[24;0f[42m[30mProgress: [ 93%][49m[39m [################################################################################################################.........] 8Setting up nodejs (20.18.3-1nodesource1) ...
7[24;0f[42m[30mProgress: [ 96%][49m[39m [###################################################################################################################......] 87[24;0f[42m[30mProgress: [ 98%][49m[39m [######################################################################################################################...] 8Processing triggers for libc-bin (2.35-0ubuntu3.6) ...

7[0;24r8[1A[J[?2004h]0;root@590c8e7bb663: /root@590c8e7bb663:/# [H[2J]0;root@590c8e7bb663: /root@590c8e7bb663:/# node [7m/usr/src/app/index.js[27m/usr/src/app/index.js
[?2004lHello World
[?2004h]0;root@590c8e7bb663: /root@590c8e7bb663:/# [Kexit
[?2004lexit
ex[?2004h[0;36m([0;32mmain ↑1 U:1 ?:2 [0;31m✗[0;36m)[39m [0;36mscript-answers[39m exit
[?2004lexit

Script done on Tue Feb 18 19:01:32 2025
