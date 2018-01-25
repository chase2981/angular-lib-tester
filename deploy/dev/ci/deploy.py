import os

repository = '/srv/www/textmsgit-ng'
branch = 'origin dev'

def pull_git():
    os.system('cd ' + repository + '&& git reset --hard HEAD')
    os.system('cd ' + repository + '&& git pull ' + branch)
    os.system('cd ' + repository + '&& ' + 'npm install --unsafe-perm')
    os.system('cd ' + repository + '&& ' + 'ng build')
    os.system('sudo chown -R rd:developers ' + repository)

if __name__ == '__main__':
    pull_git()
