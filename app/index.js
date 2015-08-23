'use strict'

import * as async  from  'async'
import * as videos from  'videos'

async.task(videos.lookup().then(files => console.log(files)), 'Looking for videos files')