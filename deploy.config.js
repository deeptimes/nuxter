const config = {
  ssh: {
    host: '114.115.213.169',
    port: 49364,
    username: 'root',
    privateKey: '~/.ssh/ezdoc_id_rsa_git',
    readyTimeout: 10000,
  },
  remote: {
    root: '/www/web',
    site: 'www_temp_com',
  },
}

export default config
