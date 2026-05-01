
  (function(){
    const translations = {
      zh: {
        appTitle:"音乐站",
        shortcutHint:"快捷键：Space 播放/暂停 · ←/→ 跳转 · ↑/↓ 音量 · N/P 切歌 · F 收藏 · L 切换歌词效果",
        shortcutPanelTitle:"快捷键说明",
        shortcutPanelDesc:"使用键盘可以更加方便地控制音乐站：",
        shortcutPlayPause:"播放 / 暂停",
        shortcutSeek:"快退 / 快进 5 秒",
        shortcutVolume:"音量加 / 减",
        shortcutPrevNext:"上一首 / 下一首",
        shortcutFav:"收藏 / 取消收藏当前歌曲",
        shortcutLyricsFX:"切换歌词炫酷效果",
        shortcutMute:"静音 / 取消静音",
        shortcutFocusSearch:"聚焦搜索框",
        shortcutCloseModal:"提示：按 Esc 可以关闭弹窗。",
        searchTitle:"歌曲搜索",
        searchSubtitle:"支持咪咕 / 网易云 / QQ / 酷我",
        searchButton:"搜索",
        perSourceCount:"每个源加载",
        perSourceCountTail:"首结果",
        loadMore:"加载更多",
        searchStatusIdle:"尚未搜索，试试输入“林俊杰”？",
        searchStatusSearching:"正在搜索中…",
        searchStatusDone:"搜索完成。",
        searchStatusNoSource:"请至少选择一个音乐源。",
        playerTitle:"正在播放",
        playerSubtitle:"歌词动态高亮 · 炫酷霓虹",
        coverHint:"搜索并播放一首歌吧！",
        playerStatusIdle:"空闲",
        playerStatusLoading:"加载音源中…",
        playerStatusPlaying:"播放中",
        playerStatusPaused:"已暂停",
        lyricsEmpty:"暂无歌词，试着播放一首支持歌词的歌曲。",
        playlistTitle:"播放列表",
        tabResults:"搜索结果",
        tabFavorites:"我的收藏",
        tabCustomLists:"自建歌单",
        playlistInfoResults:"搜索结果列表",
        playlistInfoFavorites:"收藏列表",
        playlistInfoPlaylist:"歌单",
        newPlaylist:"新建歌单",
        footerText:"本站仅作为学习演示，音乐版权归各平台与原作者所有。",
        toastAddedFavorite:"已添加到收藏",
        toastRemovedFavorite:"已从收藏移除",
        toastAddedToPlaylist:"已添加到歌单",
        toastAlreadyInList:"该歌曲已在当前列表里~",
        toastNoMore:"已经没有更多搜索结果啦~",
        toastNeedKeyword:"请先输入搜索关键词。",
        toastSearchError:"搜索时发生了一点小错误，请稍后再试。",
        toastPlayError:"播放失败，请稍后再试。",
        toastLyricStyleSwitched:"已切换歌词炫酷效果。",
        toastDownloadNotReady:"当前歌曲还未加载完成，稍后再试。",
        toastPlaylistCreated:"歌单创建成功。",
        toastPlaylistEmpty:"当前歌单为空，先添加几首歌吧~",
        toastPlaymodeList:"播放模式：列表循环",
        toastPlaymodeSingle:"播放模式：单曲循环",
        toastPlaymodeShuffle:"播放模式：随机播放",
        toastNeedPlaylistSelected:"请先选择一个歌单。",
        toastNoCurrentTrack:"当前没有正在播放的歌曲。",
        sourceMigu:"咪咕",
        sourceNetease:"网易云",
        sourceQQ:"QQ音乐",
        sourceKuwo:"酷我",
        modalNewPlaylistTitle:"新建歌单",
        modalNewPlaylistDesc:"给你的歌单取一个可爱的名字吧～",
        modalConfirm:"确定",
        modalCancel:"取消"
      },
      en: {
        appTitle:"Music Station",
        shortcutHint:"Shortcuts: Space Play/Pause · ←/→ Seek · ↑/↓ Volume · N/P Track · F Fav · L Lyrics FX",
        shortcutPanelTitle:"Keyboard Shortcuts",
        shortcutPanelDesc:"Control Music Station more easily with your keyboard:",
        shortcutPlayPause:"Play / Pause",
        shortcutSeek:"Seek backward / forward 5s",
        shortcutVolume:"Volume up / down",
        shortcutPrevNext:"Previous / Next track",
        shortcutFav:"Favorite / unfavorite current track",
        shortcutLyricsFX:"Toggle lyrics FX",
        shortcutMute:"Mute / unmute",
        shortcutFocusSearch:"Focus on search box",
        shortcutCloseModal:"Tip: press Esc to close dialogs.",
        searchTitle:"Search",
        searchSubtitle:"Supports Migu / Netease / QQ / Kuwo",
        searchButton:"Search",
        perSourceCount:"Per source",
        perSourceCountTail:"results",
        loadMore:"Load more",
        searchStatusIdle:"No search yet. Try typing \"JJ Lin\"?",
        searchStatusSearching:"Searching…",
        searchStatusDone:"Search completed.",
        searchStatusNoSource:"Please select at least one music source.",
        playerTitle:"Now Playing",
        playerSubtitle:"Dynamic neon lyrics visualizer",
        coverHint:"Search and play a song!",
        playerStatusIdle:"Idle",
        playerStatusLoading:"Loading audio…",
        playerStatusPlaying:"Playing",
        playerStatusPaused:"Paused",
        lyricsEmpty:"No lyrics yet. Try a song with LRC lyrics.",
        playlistTitle:"Playlists",
        tabResults:"Default",
        tabFavorites:"Favorites",
        tabCustomLists:"Playlists",
        playlistInfoResults:"Search Result List",
        playlistInfoFavorites:"Favorites List",
        playlistInfoPlaylist:"Playlist",
        newPlaylist:"Create",
        footerText:"For demo only. All music copyrights belong to original owners.",
        toastAddedFavorite:"Added to favorites",
        toastRemovedFavorite:"Removed from favorites",
        toastAddedToPlaylist:"Added to playlist",
        toastAlreadyInList:"This song is already in this list.",
        toastNoMore:"No more results to load.",
        toastNeedKeyword:"Please enter a search keyword first.",
        toastSearchError:"An error occurred while searching.",
        toastPlayError:"Playback failed. Please try again.",
        toastLyricStyleSwitched:"Lyrics FX toggled.",
        toastDownloadNotReady:"Song not fully loaded yet. Try again later.",
        toastPlaylistCreated:"Playlist created.",
        toastPlaylistEmpty:"Playlist is empty. Add some songs first.",
        toastPlaymodeList:"Play mode: list loop",
        toastPlaymodeSingle:"Play mode: single loop",
        toastPlaymodeShuffle:"Play mode: shuffle",
        toastNeedPlaylistSelected:"Please select a playlist first.",
        toastNoCurrentTrack:"No track is currently playing.",
        sourceMigu:"Migu",
        sourceNetease:"Netease",
        sourceQQ:"QQ Music",
        sourceKuwo:"Kuwo",
        modalNewPlaylistTitle:"Create Playlist",
        modalNewPlaylistDesc:"Give your playlist a cute name!",
        modalConfirm:"Confirm",
        modalCancel:"Cancel"
      }
    };

    const state = {
      language:'zh',
      enabledSources:{migu:true, netease:true, qq:true, kuwo:true},
      perSourceLimit:10,
      perSourceCurrentLimit:{migu:10, netease:10, qq:10, kuwo:10},
      perSourcePage:{migu:1, netease:1, qq:1, kuwo:1},

      searchKeyword:'',
      searchResults:[],
      trackMap:new Map(),
      favorites:[],
      playlists:[],
      currentTrack:null,
      playContext:{type:'results',index:-1,playlistId:null},
      playMode:'list',
      isPlaying:false,
      lyricLines:[],
      currentLyricIndex:-1,
      searchInProgress:false,
      noMoreResults:false,
      lyricsAlt:false,
      muted:false
    };

    const dom = {};
    let audioLevel = 0;

    function $(id){return document.getElementById(id);}
    function t(k){const lang=state.language;return (translations[lang]&&translations[lang][k])||translations.zh[k]||k;}
    function showToast(msg){
      const toast=$('toast'); if(!toast)return;
      toast.textContent=msg;
      toast.classList.add('show');
      setTimeout(()=>toast.classList.remove('show'),2000);
    }
    function formatTime(sec){
      if(!isFinite(sec)||sec<0)sec=0;
      const m=Math.floor(sec/60);const s=Math.floor(sec%60);
      return m + ':' + String(s).padStart(2,'0');
    }

    function updateDocumentTitle() {
      const tr = state.currentTrack;
      if (tr && tr.title) {
        const artist = tr.artist ? ' - ' + tr.artist : '';
        document.title = tr.title + artist;
      } else {
        document.title = t('appTitle');
      }
    }

    function isMobile() {
      return window.innerWidth <= 640;
    }

    function setupMediaSession() {
      if (!('mediaSession' in navigator)) return;
      const actionHandlers = [
        ['play', () => dom.audio.play().catch(()=>{})],
        ['pause', () => dom.audio.pause()],
        ['previoustrack', () => playNext('prev')],
        ['nexttrack', () => playNext('next')],
        ['seekforward', (details) => { dom.audio.currentTime = Math.min(dom.audio.duration, (dom.audio.currentTime||0) + (details.seekOffset || 5)); }],
        ['seekbackward', (details) => { dom.audio.currentTime = Math.max(0, (dom.audio.currentTime||0) - (details.seekOffset || 5)); }]
      ];
      for (const [action, handler] of actionHandlers) {
        try { navigator.mediaSession.setActionHandler(action, handler); } catch(e) {}
      }
    }

    function updateMediaMetadata() {
      if (!('mediaSession' in navigator)) return;
      const tr = state.currentTrack;
      if (!tr) {
        navigator.mediaSession.metadata = null;
        return;
      }
      const title = tr.title || '未知歌曲';
      const artist = tr.artist || '未知歌手';
      const album = tr.album || '';
      const artwork = tr.cover ? [{ src: tr.cover, sizes: '512x512', type: 'image/jpeg' }] : [];
      navigator.mediaSession.metadata = new MediaMetadata({
        title: title,
        artist: artist,
        album: album,
        artwork: artwork
      });
    }

    function getInterleavedSearchList(){
      const grouped={migu:[],netease:[],qq:[],kuwo:[]};
      state.searchResults.forEach(t=>{if(grouped[t.source])grouped[t.source].push(t);});
      Object.keys(grouped).forEach(k=>grouped[k].sort((a,b)=>(a.displayIndex||0)-(b.displayIndex||0)));
      const order=['migu','netease','qq','kuwo'];
      const idx={migu:0,netease:0,qq:0,kuwo:0};
      const out=[];
      let added=true;
      while(added){
        added=false;
        for(const s of order){
          const arr=grouped[s]; const i=idx[s];
          if(arr && i<arr.length){out.push(arr[i]);idx[s]++;added=true;}
        }
      }
      return out;
    }

    function setLanguage(lang){
      if(lang!=='zh' && lang!=='en') lang='zh';
      state.language=lang;
      try{localStorage.setItem('pikachu-music-lang',lang);}catch(e){}
      document.querySelectorAll('.lang-btn').forEach(btn=>{
        btn.classList.toggle('active',btn.dataset.lang===lang);
      });
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key=el.dataset.i18n;
        if(key) el.textContent = t(key);
      });
      dom.searchInput.placeholder = lang==='zh'
        ? '输入歌名 / 歌手，回车搜索…'
        : 'Type song / artist, press Enter…';
      dom.playlistNameInput.placeholder = lang==='zh'
        ? '例如：通勤歌单 / 宝可梦歌单'
        : 'e.g. Commute mix / Pokemon list';
      updatePlaylistInfoLabel();
      updateDocumentTitle();
    }

    // ========== 质量映射函数 ==========
    function inferQualityFromUrl(url){
      if(!url) return {tag:null,label:''};
      let base = url.split('?')[0].toLowerCase();
      const m = base.match(/\.([a-z0-9]+)$/);
      const ext = m ? m[1] : '';
      const losslessExts = ['flac','wav','ape','alac','aiff'];
      if (losslessExts.includes(ext)) {
        return {tag:'lossless', label:'LOSSLESS'};
      }
      return {tag:'320k', label:'320K'};
    }

    // ===================== 各平台搜索 =====================

    async function searchMigu(kw,limit){
      const url=`https://api.xcvts.cn/api/music/migu?gm=${encodeURIComponent(kw)}&n=&num=${encodeURIComponent(limit)}&type=json`;
      let added=0;
      try{
        const res=await fetch(url);
        const json=await res.json();
        if(json.code!==200||!Array.isArray(json.data))return 0;
        for(const it of json.data){
          const n=it.n;
          const uid=`migu-${kw}-${n}-${it.title}-${it.singer}`;
          if(state.trackMap.has(uid))continue;
          const track={
            uid,source:'migu',displayIndex:n||0,keyword:kw,
            requestNum: limit,
            title:it.title||'',artist:it.singer||'',album:'',
            cover:null,audioUrl:null,lrc:null,lrcUrl:null,
            detailsLoaded:false,
            quality:null,
            qualityLabel:null
          };
          state.trackMap.set(uid,track);
          state.searchResults.push(track); added++;
        }
      }catch(e){console.error('migu',e);}
      return added;
    }

    async function searchNetease(kw, page, num){
      const url=`https://api.vkeys.cn/v2/music/netease?word=${encodeURIComponent(kw)}&page=${encodeURIComponent(page)}&num=${encodeURIComponent(num)}`;
      let added=0;
      try{
        const res=await fetch(url);
        const json=await res.json();
        if(json.code!==200||!Array.isArray(json.data))return 0;

        json.data.forEach((it, idx)=>{
          const songId = it.id;
          const uid=`netease-${songId}`;
          if(state.trackMap.has(uid))return;

          const track={
            uid,
            source:'netease',
            displayIndex:(Math.max(1,page)-1)*Math.max(1,num) + (idx+1),
            keyword:kw,

            songid:songId,
            title:it.song||'',
            artist:it.singer||'',
            album:it.album||'',

            cover:it.cover||null,
            audioUrl:null,
            lrc:null,
            lrcUrl:null,

            detailsLoaded:false,
            quality:null,
            qualityLabel:null
          };
          state.trackMap.set(uid,track);
          state.searchResults.push(track);
          added++;
        });

      }catch(e){console.error('netease(vkeys)',e);}
      return added;
    }

    async function searchQQ(kw, limit) {
    const url =
        `https://tang.api.s01s.cn/music_open_api.php` +
        `?msg=${encodeURIComponent(kw)}` +
        `&type=json`;

    let added = 0;

    try {
        const res = await fetch(url);
        const json = await res.json();

        const data = Array.isArray(json) ? json : (Array.isArray(json?.data) ? json.data : []);
        if (!Array.isArray(data) || data.length === 0) return 0;

        const list = data.slice(0, limit || data.length);

        list.forEach((it, idx) => {
        const mid = it.song_mid;
        if (!mid) return;

        const uid = `qq-${mid}`;
        if (state.trackMap.has(uid)) return;

        const indexInList = idx + 1;

        const track = {
            uid,
            source: 'qq',

            displayIndex: indexInList,

            keyword: kw,
            qqSearchKey: kw,

            qqIndex: indexInList,

            qqId: mid,
            songid: mid,
            songMid: mid,

            title: it.song_title || '',
            artist: it.singer_name || '',
            album: '',

            cover: null,

            audioUrl: null,
            lrc: null,
            lrcUrl: null,

            detailsLoaded: false,

            quality: null,
            qualityLabel: null,

            qqQualityText: it.pay || null,
            pay: it.pay || null
        };

        state.trackMap.set(uid, track);
        state.searchResults.push(track);
        added++;
        });
    } catch (e) {
        console.error('qq search (tang)', e);
    }

    return added;
    }

    async function searchKuwo(kw, limit){
      const url=`https://kw-api.cenguigui.cn/?name=${encodeURIComponent(kw)}&page=1&limit=${encodeURIComponent(limit)}`;
      let added=0;
      try{
        const res=await fetch(url);
        const json=await res.json();
        if(json.code!==200 || !Array.isArray(json.data)) return 0;

        json.data.forEach((it, idx)=>{
          const uid=`kuwo-${it.rid}`;
          if(state.trackMap.has(uid))return;

          const track={
            uid,
            source:'kuwo',
            displayIndex:idx+1,
            keyword:kw,
            songid:it.rid,

            title:it.name||'',
            artist:it.artist||'',
            album:it.album||'',

            cover:it.pic||null,
            audioUrl:null,
            lrc:null,
            lrcUrl:null,
            detailsLoaded:false,
            quality:null,
            qualityLabel:null
          };

          state.trackMap.set(uid,track);
          state.searchResults.push(track);
          added++;
        });
      }catch(e){
        console.error('[DEBUG] Kuwo search failed:', e);
      }
      console.log(`[DEBUG] Kuwo search finished, added ${added} tracks.`);
      return added;
    }

    // ===================== 聚合搜索 =====================

    async function searchAllSources(reset){
      if(!state.searchKeyword){showToast(t('toastNeedKeyword'));return;}
      const enabled=Object.keys(state.enabledSources).filter(k=>state.enabledSources[k]);
      if(!enabled.length){showToast(t('searchStatusNoSource'));return;}
      state.searchInProgress=true;
      dom.searchStatus.textContent=t('searchStatusSearching');

      if(reset){
        Object.keys(state.perSourceCurrentLimit)
          .forEach(k=>state.perSourceCurrentLimit[k]=state.perSourceLimit);
        Object.keys(state.perSourcePage).forEach(k=>state.perSourcePage[k]=1);

        state.searchResults=[];
        state.trackMap.clear();
        state.noMoreResults=false;
      }

      const kw=state.searchKeyword;
      const tasks=[];
      for(const s of enabled){
        const limit=state.perSourceCurrentLimit[s]||state.perSourceLimit;

        if(s==='migu')tasks.push(searchMigu(kw,limit));
        if(s==='netease')tasks.push(searchNetease(kw, state.perSourcePage.netease || 1, state.perSourceLimit));
        if(s==='qq')tasks.push(searchQQ(kw,limit));
        if(s==='kuwo')tasks.push(searchKuwo(kw,limit));
      }
      let added=0;
      try{
        const res=await Promise.all(tasks);
        added=res.reduce((a,b)=>a+(b||0),0);
      }catch(e){
        console.error(e);
        showToast(t('toastSearchError'));
      }

      state.searchInProgress=false;
      dom.searchStatus.textContent=t('searchStatusDone');
      dom.searchCount.textContent=state.searchResults.length.toString();
      renderMiniSearchList();
      renderPlaylistList();
      if(!state.currentTrack && state.searchResults.length){
        playFromList('results',0);
      }
      if(!reset){
        if(added===0){state.noMoreResults=true;showToast(t('toastNoMore'));}
        else state.noMoreResults=false;
      }
    }

    // ===================== 各平台详情 =====================

    async function fetchMiguDetails(track){
      const num = track.requestNum || state.perSourceCurrentLimit.migu || state.perSourceLimit || 20;
      const url=`https://api.xcvts.cn/api/music/migu?gm=${encodeURIComponent(track.keyword)}&n=${encodeURIComponent(track.displayIndex||1)}&num=${encodeURIComponent(num)}&type=json`;
      const res=await fetch(url);
      const j=await res.json();
      if(j.code!==200) throw new Error('migu detail');

      Object.assign(track,{
        title:j.title||track.title,
        artist:j.singer||track.artist,
        cover:j.cover||track.cover,
        audioUrl:j.music_url||track.audioUrl,
        lrcUrl:j.lrc_url||track.lrcUrl,
        pageUrl:j.link||track.pageUrl,
        detailsLoaded:true
      });

      if (track.audioUrl) {
        const q = inferQualityFromUrl(track.audioUrl);
        track.quality = q.tag;
        track.qualityLabel = q.label;
      }

      if(track.lrcUrl && !track.lrc){
        try{
          const r=await fetch(track.lrcUrl);
          track.lrc=await r.text();
        }catch(e){}
      }
    }

    async function fetchNeteaseDetails(track){
      const metingApi=`https://api.qijieya.cn/meting/?type=song&id=${encodeURIComponent(track.songid)}`;
      const res=await fetch(metingApi);
      const j=await res.json();
      if(!Array.isArray(j) || !j.length) throw new Error('netease meting detail empty');

      const d=j[0]||{};
      Object.assign(track,{
        title:d.name||track.title,
        artist:d.artist||track.artist,
        audioUrl:d.url||track.audioUrl,
        cover:d.pic||track.cover
      });

      if (track.audioUrl) {
        const q = inferQualityFromUrl(track.audioUrl);
        track.quality = q.tag;
        track.qualityLabel = q.label;
      }

      const lyricApi=`https://api.vkeys.cn/v2/music/netease/lyric?id=${encodeURIComponent(track.songid)}`;
      try{
        const lr=await fetch(lyricApi);
        const lj=await lr.json();
        if(lj && lj.code===200 && lj.data){
          track.lrc = lj.data.lrc || track.lrc || null;
          track.lrcUrl = track.lrcUrl || lyricApi;
        }
      }catch(e){
        console.warn('netease(vkeys) lyric fetch failed', e);
      }

      track.detailsLoaded=true;
    }

    async function fetchQQDetails(track) {
    const msg =
        (track.qqSearchKey || track.keyword || '').trim() ||
        ((track.title || '') + ' ' + (track.artist || '')).trim();

    const mid =
        (track.qqId || track.songMid || track.songid || '').toString().trim();

    if (!mid) return;

    const url =
        `https://tang.api.s01s.cn/music_open_api.php` +
        `?msg=${encodeURIComponent(msg)}` +
        `&type=json` +
        `&mid=${encodeURIComponent(mid)}`;

    function pickBestPlayUrl(d) {
        if (d.song_play_url_sq) return { url: d.song_play_url_sq, tag: 'lossless', label: 'LOSSLESS', text: `SQ ${d.kbps_sq || ''}`.trim() };
        if (d.song_play_url_pq) return { url: d.song_play_url_pq, tag: 'lossless', label: 'LOSSLESS', text: `PQ ${d.kbps_pq || ''}`.trim() };

        if (d.song_play_url_accom) return { url: d.song_play_url_accom, tag: 'hq', label: 'HQ', text: `ACCOM ${d.kbps_accom || ''}`.trim() };
        if (d.song_play_url_hq) return { url: d.song_play_url_hq, tag: 'hq', label: 'HQ', text: `HQ ${d.kbps_hq || ''}`.trim() };

        if (d.song_play_url_standard) return { url: d.song_play_url_standard, tag: 'standard', label: 'STD', text: `STD ${d.kbps_standard || ''}`.trim() };
        if (d.song_play_url_fq) return { url: d.song_play_url_fq, tag: 'low', label: 'LOW', text: `FQ ${d.kbps_fq || ''}`.trim() };

        if (d.song_play_url) return { url: d.song_play_url, tag: null, label: null, text: null };

        return { url: null, tag: null, label: null, text: null };
    }

    try {
        const res = await fetch(url);
        const d = await res.json();

        if (!d || typeof d !== 'object' || !d.song_mid) {
        throw new Error('qq detail error (invalid response)');
        }

        track.title   = d.song_title || d.song_name || track.title;
        track.artist  = d.singer_name || track.artist;
        track.album   = d.album_name || d.album_title || track.album || '';
        track.cover   = d.album_pic || d.singer_pic || track.cover;
        track.pageUrl = d.song_h5_url || track.pageUrl;

        const best = pickBestPlayUrl(d);
        track.audioUrl = best.url || track.audioUrl;

        track.lrc = d.song_lyric || d.lyric || track.lrc;

        track.qqQualityText =
        best.text ||
        (d.vip ? `VIP:${d.vip}` : null) ||
        track.qqQualityText;

        if (best.tag && best.label) {
        track.quality = best.tag;
        track.qualityLabel = best.label;
        }

        if (track.audioUrl) {
        const q = inferQualityFromUrl(track.audioUrl);
        if (q && q.label) {
            track.quality = q.tag;
            track.qualityLabel = q.label;
        }
        }

        track.detailsLoaded = true;
    } catch (e) {
        console.error('qq detail (tang)', e);
    }
    }

    async function fetchKuwoDetails(track){
      const api=`https://kw-api.cenguigui.cn/?id=${encodeURIComponent(track.songid)}&type=song&level=zp&format=json`;
      const res=await fetch(api);
      const j=await res.json();
      if(!j || j.code!==200 || !j.data) throw new Error('kuwo kw-api detail failed');

      const d=j.data;
      Object.assign(track,{
        title:d.name || track.title,
        artist:d.artist || track.artist,
        album:d.album || track.album,
        cover:d.pic || track.cover,
        audioUrl:d.url || track.audioUrl,
        lrc: d.lyric || track.lrc || null,
        lrcUrl: null,
        detailsLoaded:true
      });

      if (track.audioUrl) {
        const q = inferQualityFromUrl(track.audioUrl);
        track.quality = q.tag;
        track.qualityLabel = q.label;
      }
    }

    // Lyrics rendering and highlighting moved and merged below...


    async function ensureTrackDetails(track){
      if(track.detailsLoaded && track.audioUrl && (track.lrc || !track.lrcUrl)) return;
      if(dom.playerStatus) dom.playerStatus.textContent=t('playerStatusLoading');
      console.log(`[DEBUG] Loading details for: ${track.title} from ${track.source}`);
      
      try {
        if(track.source==='migu') await fetchMiguDetails(track);
        else if(track.source==='netease') await fetchNeteaseDetails(track);
        else if(track.source==='kuwo') await fetchKuwoDetails(track);
        else await fetchQQDetails(track);
        
        if(dom.playerStatus) dom.playerStatus.textContent=''; // Clear loading status if exists
        
        if(!track.audioUrl) {
          throw new Error(`API returned success but no audio URL found for source: ${track.source}`);
        }
        console.log(`[DEBUG] Successfully got URL: ${track.audioUrl.substring(0, 50)}...`);
      } catch (err) {
        console.error(`[DEBUG] ensureTrackDetails failed for ${track.source}:`, err);
        throw err; // Re-throw to be caught by playTrack
      }
    }

    // ===================== 歌词处理 =====================

    function parseLRC(txt){
      if(!txt)return[];
      const lines=txt.split(/\r?\n/);
      const reg=/\[(\d{1,2}):(\d{1,2})(?:\.(\d{1,3}))?\]/;
      const out=[];
      for(const line of lines){
        const m=reg.exec(line); if(!m)continue;
        const min=parseInt(m[1],10)||0;
        const sec=parseInt(m[2],10)||0;
        const ms=m[3]?parseInt(m[3].padEnd(3,'0'),10):0;
        const time=min*60+sec+ms/1000;
        const text=line.replace(reg,'').trim();
        if(text)out.push({time,text});
      }
      out.sort((a,b)=>a.time-b.time);
      return out;
    }

    function renderLyrics(){
      const wrap=dom.lyricsInner;
      const amWrap = dom.lyricsContainer;
      if(!wrap && !amWrap) return;
      
      const target = amWrap || wrap; // Use immersive container if available
      target.innerHTML='';
      state.currentLyricIndex=-1;
      
      if(!state.lyricLines.length){
        const empty=document.createElement('div');
        empty.className='am-lyric-line lyrics-empty';
        empty.textContent=t('lyricsEmpty');
        target.appendChild(empty);
        return;
      }

      state.lyricLines.forEach((ln,i)=>{
        const div=document.createElement('div');
        div.className='am-lyric-line lyrics-line';
        div.dataset.index=i;
        div.textContent=ln.text || ln.txt;
        target.appendChild(div);
      });
    }

    function updateLyricsHighlight(time){
      const lines=state.lyricLines; if(!lines.length)return;
      const wrap = dom.lyricsContainer || dom.lyricsInner;
      if(!wrap) return;

      let idx=-1;
      for(let i=0; i<lines.length; i++){
        if(time >= lines[i].time - 0.2){
          idx = i;
        } else {
          break;
        }
      }

      if(idx<0 || idx===state.currentLyricIndex)return;
      state.currentLyricIndex=idx;
      
      const allLines = wrap.querySelectorAll('.am-lyric-line');
      allLines.forEach(el=>el.classList.remove('active'));
      
      const act=wrap.querySelector(`[data-index="${idx}"]`);
      if(act){
        act.classList.add('active');
        // 计算滚动位置，让当前行处于容器中心偏上位置
        const offset = act.offsetTop - wrap.clientHeight * 0.4;
        wrap.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    }

    // ===================== 收藏 / 播放 =====================

    function isFavorite(track){
      if(!track)return false;
      return state.favorites.some(x=>x.uid===track.uid);
    }
    function updateMainFavButton(){
      const tr=state.currentTrack;
      const active=isFavorite(tr);
      dom.favBtn.classList.toggle('btn-fav-active',active);
    }

    function toggleMobileSearch(collapsed) {
      if (!isMobile()) return;
      const panel = document.querySelector('.search-panel');
      if (collapsed) panel.classList.remove('active');
      else panel.classList.add('active');
    }

    function togglePlaylist() {
      const panel = document.querySelector('.playlist-panel');
      panel.classList.toggle('active');
    }

    async function playTrack(track,context){
      if(!track)return;
      state.currentTrack=track;
      state.playContext=context||state.playContext;

      // 在异步加载前先更新封面和标题，让用户看到反应
      updateDocumentTitle();
      updateMediaMetadata();
      
      const applyUI=()=>{
        const t = track.title || 'Unknown';
        const a = track.artist || 'Unknown';
        if(dom.trackTitle) dom.trackTitle.textContent = t;
        if(dom.trackArtist) dom.trackArtist.textContent = a;
        if(dom.headerTitle) dom.headerTitle.textContent = t;
        if(dom.headerArtist) dom.headerArtist.textContent = a;

        if(track.cover){
          if(dom.coverImg) dom.coverImg.src=track.cover;
          if(dom.headerImg) dom.headerImg.src=track.cover;
          const bgBlur = document.querySelector('.background-blur');
          if(bgBlur) bgBlur.style.backgroundImage = `url(${track.cover})`;
        }
      };

      applyUI();
      updateMainFavButton();

      // [核心修复] 移动端抢先激活 Audio 对象，防止异步获取 URL 后 play() 被拦截
      dom.audio.pause();
      dom.audio.src = "";
      dom.audio.load();

      if (dom.searchModal) dom.searchModal.classList.remove('active');

      try{
        await ensureTrackDetails(track);
        applyUI();
        state.lyricLines = track.lrc ? parseLRC(track.lrc) : [];
        renderLyrics();
        
        if(!track.audioUrl){
          showToast(`播放失败: [${track.source}] 无法获取音频地址`);
          return;
        }

        dom.audio.src = track.audioUrl;
        const playPromise = dom.audio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            if(dom.playBtn) dom.playBtn.innerHTML = '<i data-lucide="pause"></i>';
            if(window.lucide) window.lucide.createIcons();
          }).catch(error => {
            console.error("Playback failed:", error);
            showToast(`播放被拦截: ${error.message}`);
          });
        }
        
        state.isPlaying=true;
      }catch(e){
        console.error("ensureTrackDetails failed:", e);
        showToast(`加载失败: [${track.source}] ${e.message || '网络或接口异常'}`);
      }

      renderMiniSearchList();
      renderPlaylistList();
    }

    function getActiveList(){
      const tp=state.playContext.type;
      if(tp==='results'){
        let list=getInterleavedSearchList();
        if(!list.length && state.searchResults.length){
          list=[...state.searchResults];
        }
        return list;
      }
      if(tp==='favorites')return state.favorites;
      if(tp==='playlist'){
        const pl=state.playlists.find(p=>p.id===state.playContext.playlistId);
        return pl?pl.tracks:[];
      }
      return getInterleavedSearchList();
    }

    function playFromList(type,index,plId){
      let list;
      if(type==='results') list=getInterleavedSearchList();
      else if(type==='favorites') list=state.favorites;
      else{
        const pl=state.playlists.find(p=>p.id===plId);
        list=pl?pl.tracks:[];
      }
      if(!list || !list.length){
        if(type!=='results')showToast(t('toastPlaylistEmpty'));
        return;
      }
      if(index<0)index=list.length-1;
      if(index>=list.length)index=0;
      state.playContext={type,index,playlistId:plId||null};
      playTrack(list[index],state.playContext);
    }

    function playNext(direction){
      const list=getActiveList(); if(!list.length)return;
      let idx=state.playContext.index ?? -1;
      if(idx<0||idx>=list.length)idx=0;

      if(state.playMode==='single'){
        dom.audio.currentTime=0;
        dom.audio.play().catch(()=>{});
        return;
      }
      if(state.playMode==='shuffle'){
        if(list.length===1){
          idx=0;
        }else{
          let newIdx;
          do{ newIdx=Math.floor(Math.random()*list.length); }while(newIdx===idx);
          idx=newIdx;
        }
      }else{
        idx = (idx + (direction==='prev'?-1:1) + list.length) % list.length;
      }
      playFromList(state.playContext.type,idx,state.playContext.playlistId);
    }

    function togglePlayPause(){
      if(!dom.audio.src)return;
      if(state.isPlaying)dom.audio.pause();
      else dom.audio.play().catch(e=>console.error(e));
    }

    function toggleFavoriteCurrent(){
      const tr=state.currentTrack; if(!tr)return;
      const i=state.favorites.findIndex(x=>x.uid===tr.uid);
      if(i>=0){state.favorites.splice(i,1);showToast(t('toastRemovedFavorite'));}
      else{state.favorites.push(tr);showToast(t('toastAddedFavorite'));}
      updateMainFavButton();
      renderPlaylistList();
    }

    function handleDownloadCurrent(){
      const tr=state.currentTrack;
      if(!tr||!tr.audioUrl){showToast(t('toastDownloadNotReady'));return;}
      window.open(tr.audioUrl,'_blank');
    }

    function addCurrentToPlaylist(){
      const plId=dom.playlistSelect.value;
      if(!plId){showToast(t('toastNeedPlaylistSelected'));return;}
      const track=state.currentTrack;
      if(!track){showToast(t('toastNoCurrentTrack'));return;}
      const pl=state.playlists.find(p=>p.id===plId);
      if(!pl){showToast(t('toastNeedPlaylistSelected'));return;}
      if(pl.tracks.some(tk=>tk.uid===track.uid)){
        showToast(t('toastAlreadyInList'));
        return;
      }
      pl.tracks.push(track);
      renderPlaylistList();
      showToast(t('toastAddedToPlaylist'));
    }

    // ===================== 搜索结果 / 播放列表渲染 =====================

    function renderMiniSearchList(){
      const wrap=dom.searchMiniList;
      wrap.innerHTML='';
      const out=getInterleavedSearchList();
      out.forEach((track,i)=>{
        const item=document.createElement('div');
        item.className='search-mini-item ripple-target';
        const meta=document.createElement('div');
        meta.className='mini-meta-main';
        const tt=document.createElement('div');
        tt.className='mini-title'; tt.textContent=track.title||'Unknown';
        const ar=document.createElement('div');
        ar.className='mini-artist'; ar.textContent=track.artist||'';
        meta.appendChild(tt);meta.appendChild(ar);
        const right=document.createElement('div');
        right.className='mini-right';
        const badge=document.createElement('div');
        badge.className='mini-badge'; badge.textContent='#'+(i+1);
        const src=document.createElement('div');
        src.className='mini-source';
        const dot=document.createElement('span');
        dot.className='source-dot '+track.source;
        const key=track.source==='migu'?'sourceMigu':
                 track.source==='netease'?'sourceNetease':
                 track.source==='qq'?'sourceQQ':'sourceKuwo';
        const txt=document.createElement('span');
        txt.textContent=t(key);
        src.appendChild(dot);src.appendChild(txt);
        right.appendChild(badge);right.appendChild(src);
        item.appendChild(meta);item.appendChild(right);
        item.addEventListener('click',()=>{
          playFromList('results',i);
          if (dom.searchModal) dom.searchModal.classList.remove('active');
        });
        wrap.appendChild(item);
      });
      if(window.lucide) window.lucide.createIcons();
    }

    function updatePlaylistInfoLabel(){
      const tab=document.querySelector('.playlist-tab.active')?.dataset.tab||'results';
      if(tab==='results') dom.playlistInfo.textContent = t('playlistInfoResults');
      else if(tab==='favorites') dom.playlistInfo.textContent = t('playlistInfoFavorites');
      else {
        const pl=state.playlists.find(p=>p.id===dom.playlistSelect.value);
        const base=t('playlistInfoPlaylist');
        dom.playlistInfo.textContent = pl? (base+' · '+pl.name) : base;
      }
    }

    function renderPlaylistList(){
      const wrap = document.getElementById('am-continue-list');
      if(!wrap) return;
      wrap.innerHTML = '';
      const list = getActiveList();
      list.slice(0, 20).forEach((track, idx) => {
        const item = document.createElement('div');
        item.className = 'am-list-item';
        item.innerHTML = `
          <div class="am-list-info">
            <div style="font-weight:600; color:#fff;">${track.title}</div>
            <div style="font-size:13px; color:rgba(255,255,255,0.5);">${track.artist}</div>
          </div>
          <i data-lucide="menu" style="color:rgba(255,255,255,0.3);"></i>
        `;
        item.addEventListener('click', () => {
          state.playContext.index = idx;
          playTrack(track, state.playContext);
        });
        wrap.appendChild(item);
      });
      if(window.lucide) window.lucide.createIcons();
    }

    // ===================== 歌单弹窗 =====================

    function openPlaylistModal(){
      dom.playlistModal.classList.add('show');
      dom.playlistNameInput.value='';
      setTimeout(()=>dom.playlistNameInput.focus(),50);
    }
    function closePlaylistModal(){
      dom.playlistModal.classList.remove('show');
    }
    function createPlaylist(){
      let name=dom.playlistNameInput.value.trim();
      if(!name)name=state.language==='zh'?'未命名歌单':'Untitled Playlist';
      const id='pl-'+Date.now()+'-'+Math.random().toString(16).slice(2);
      const pl={id,name,tracks:[]};
      state.playlists.push(pl);
      const opt=document.createElement('option');
      opt.value=pl.id; opt.textContent=pl.name;
      dom.playlistSelect.appendChild(opt);
      dom.playlistSelect.value=pl.id;
      closePlaylistModal();
      renderPlaylistList();
      showToast(t('toastPlaylistCreated'));
    }

    // ===================== 搜索加载更多 =====================

    function canAutoLoadMore(){
      return !state.searchInProgress && !state.noMoreResults;
    }
    function requestMoreResults(){
      const enabled=Object.keys(state.enabledSources).filter(k=>state.enabledSources[k]);
      if(!enabled.length)return;

      enabled.forEach(src=>{
        if(src==='netease'){
          state.perSourcePage.netease = (state.perSourcePage.netease || 1) + 1;
        }else{
          state.perSourceCurrentLimit[src]=(state.perSourceCurrentLimit[src]||state.perSourceLimit)+state.perSourceLimit;
        }
      });

      searchAllSources(false);
    }

    // ===================== 背景粒子 & 水波纹 =====================

    function setupParticles(){
      const canvas=$('bg-canvas');const ctx=canvas.getContext('2d');
      function resize(){
        const dpr=window.devicePixelRatio||1;
        canvas.width=window.innerWidth*dpr;
        canvas.height=window.innerHeight*dpr;
        ctx.setTransform(dpr,0,0,dpr,0,0);
      }
      resize();window.addEventListener('resize',resize);
      const parts=[];
      const N=60; // 移动端粒子减少一点
      for(let i=0;i<N;i++){
        parts.push({
          x:Math.random()*window.innerWidth,
          y:Math.random()*window.innerHeight,
          vx:(Math.random()-0.5)*0.4,
          vy:(Math.random()-0.5)*0.4,
          r:1+Math.random()*2,
          baseR:1+Math.random()*2,
          hue:200+Math.random()*120,
          a:0.22+Math.random()*0.3
        });
      }
      let mouse={x:window.innerWidth/2,y:window.innerHeight/2};
      window.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY;});
      function tick(){
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        const pulse = 1 + audioLevel * 2.2;
        for(const p of parts){
          p.x+=p.vx; p.y+=p.vy; p.hue+=0.08;
          if(p.x<-40)p.x=window.innerWidth+40;
          if(p.x>window.innerWidth+40)p.x=-40;
          if(p.y<-40)p.y=window.innerHeight+40;
          if(p.y>window.innerHeight+40)p.y=-40;
          const dx=p.x-mouse.x,dy=p.y-mouse.y;
          const dist=Math.sqrt(dx*dx+dy*dy);
          const push=Math.max(0,140-dist)/140;
          p.x+=dx*0.011*push; p.y+=dy*0.011*push;
          ctx.beginPath();
          ctx.arc(p.x,p.y,p.baseR*pulse,0,Math.PI*2);
          const light = Math.min(80, 60 + audioLevel*40);
          ctx.fillStyle=`hsla(${p.hue},70%,${light}%,${p.a})`;
          ctx.fill();
        }
        ctx.lineWidth=0.45;
        for(let i=0;i<parts.length;i++){
          for(let j=i+1;j<parts.length;j++){
            const a=parts[i],b=parts[j];
            const dx=a.x-b.x,dy=a.y-b.y;
            const d=Math.sqrt(dx*dx+dy*dy);
            if(d<100){
              const al=0.10*(1-d/100)*(0.6+audioLevel*1.5);
              ctx.beginPath();
              ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
              ctx.strokeStyle=`rgba(120,160,255,${al})`;
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(tick);
      }
      tick();
    }

    function setupRipple(){
      document.addEventListener('pointerdown',e=>{
        const target=e.target.closest('.ripple-target, .btn, .track-item, .search-mini-item');
        if(!target)return;
        const rect=target.getBoundingClientRect();
        const x=e.clientX-rect.left, y=e.clientY-rect.top;
        const max=Math.max(rect.width,rect.height);

        const outer=document.createElement('span');
        outer.className='ripple-circle';
        outer.style.left=x+'px'; outer.style.top=y+'px';
        outer.style.width=outer.style.height=(max*2)+'px';

        const inner=document.createElement('span');
        inner.className='ripple-circle-inner';
        inner.style.left=x+'px'; inner.style.top=y+'px';
        inner.style.width=inner.style.height=(max*1.4)+'px';

        target.appendChild(outer);
        target.appendChild(inner);
        setTimeout(()=>outer.remove(),800);
        setTimeout(()=>inner.remove(),800);
      });
    }

    // ===================== DOM / 事件绑定 =====================

    function setupDOM(){
      dom.playBtn = $('am-play-btn');
      dom.prevBtn = $('am-prev-btn');
      dom.nextBtn = $('am-next-btn');
      dom.favBtn = $('am-fav-btn');
      
      dom.trackTitle = $('am-main-title');
      dom.trackArtist = $('am-main-artist');
      dom.headerTitle = $('am-header-title');
      dom.headerArtist = $('am-header-artist');
      dom.headerRow = document.querySelector('.am-header');
      dom.modesRow = document.querySelector('.am-modes-row');
      
      dom.coverImg = $('am-big-cover');
      dom.headerImg = $('am-header-img');
      dom.progressWrapper = $('am-progress-wrapper');
      dom.progressBar = $('am-progress-fill');
      dom.currentTime = $('am-time-cur');
      dom.totalTime = $('am-time-rem');
      dom.lyricsContainer = $('am-lyrics-view');
      dom.playlistContainer = $('am-list-view');
      dom.audio = $('audio');
      
      dom.searchModal = $('am-search-modal');
      dom.searchInput = $('am-search-input');
      dom.searchMiniList = $('am-search-results');
      dom.searchCancel = $('am-search-cancel');
      dom.lyricsToggle = $('am-lyrics-toggle');
      dom.searchToggle = $('am-search-toggle');
      dom.listToggle = $('am-list-toggle');

      dom.limitSelect=$('limit-select');
      dom.loadMoreBtn=$('load-more-btn');
      dom.searchStatus=$('search-status');
      dom.searchCount=$('search-count');

      dom.trackSourcePill=$('track-source-pill');
      dom.trackQualityPill=$('track-quality-pill');
      dom.playerStatus=$('player-status');
      dom.downloadBtn=$('download-btn');
      dom.volumeSlider=$('volume-slider');
      dom.lyricsInner=$('lyrics-inner');

      dom.playlistList=$('playlist-list');
      dom.playlistInfo=$('playlist-info');
      dom.playlistSelectRow=$('playlist-select-row');
      dom.playlistSelect=$('playlist-select');
      dom.newPlaylistBtn=$('new-playlist-btn');
      dom.addCurrentBtn=$('add-current-btn');

      dom.playlistModal=$('playlist-modal');
      dom.playlistNameInput=$('playlist-name-input');
      dom.playlistConfirmBtn=$('playlist-confirm-btn');
      dom.playlistCancelBtn=$('playlist-cancel-btn');
      dom.playlistCloseBtn=$('playlist-close');

      dom.shortcutToggleBtn=$('shortcut-toggle-btn');
      dom.shortcutModal=$('shortcut-modal');
      dom.shortcutCloseBtn=$('shortcut-close');
    }

    function setPlaymodeUI(){
      document.querySelectorAll('.playmode-btn').forEach(btn=>{
        btn.classList.toggle('active',btn.dataset.mode===state.playMode);
      });
    }

    function setupEvents(){
      document.querySelectorAll('.lang-btn').forEach(btn=>{
        btn.addEventListener('click',()=>setLanguage(btn.dataset.lang));
      });

      dom.limitSelect.addEventListener('change',()=>{
        state.perSourceLimit=parseInt(dom.limitSelect.value,10)||10;
      });

      dom.loadMoreBtn.addEventListener('click',()=>{
        const enabled=Object.keys(state.enabledSources).filter(k=>state.enabledSources[k]);
        if(!enabled.length){showToast(t('searchStatusNoSource'));return;}

        enabled.forEach(s=>{
          if(s==='netease'){
            state.perSourcePage.netease = (state.perSourcePage.netease || 1) + 1;
          }else{
            state.perSourceCurrentLimit[s]=(state.perSourceCurrentLimit[s]||state.perSourceLimit)+state.perSourceLimit;
          }
        });

        state.noMoreResults=false;
        searchAllSources(false);
      });

      // Apple Music 底部功能栏切换
      dom.lyricsToggle.addEventListener('click', () => {
        const isL = dom.lyricsContainer.style.display === 'block';
        dom.lyricsContainer.style.display = isL ? 'none' : 'block';
        
        // 核心：切换动画状态
        const panel = document.querySelector('.player-panel');
        if(panel) panel.classList.toggle('is-mini', !isL);
        
        dom.playlistContainer.style.display = 'none';
        
        if(dom.headerRow) dom.headerRow.style.display = isL ? 'none' : 'flex';
        if(dom.modesRow) dom.modesRow.style.display = 'none';
        
        dom.lyricsToggle.classList.toggle('active', !isL);
        dom.searchToggle.classList.remove('active');
        dom.listToggle.classList.remove('active');
        
        if(!isL) renderLyrics();
      });

      dom.listToggle.addEventListener('click', () => {
        const isP = dom.playlistContainer.style.display === 'block';
        dom.playlistContainer.style.display = isP ? 'none' : 'block';
        // 核心：切换动画状态
        const panel = document.querySelector('.player-panel');
        if(panel) panel.classList.toggle('is-mini', !isP);
        
        dom.lyricsContainer.style.display = 'none';
        if(dom.headerRow) dom.headerRow.style.display = isP ? 'none' : 'flex';
        if(dom.modesRow) dom.modesRow.style.display = isP ? 'none' : 'flex';
        
        dom.listToggle.classList.toggle('active', !isP);
        dom.lyricsToggle.classList.remove('active');
        dom.searchToggle.classList.remove('active');
        
        if(!isP) renderPlaylistList();
      });

      // 播放模式按钮绑定
      const btnShuffle = document.getElementById('mode-shuffle');
      const btnRepeat = document.getElementById('mode-repeat');
      const btnInfinity = document.getElementById('mode-infinity');

      if(btnShuffle) btnShuffle.addEventListener('click', () => {
        state.playMode = 'shuffle';
        updateModeBtns();
        showToast(t('toastPlaymodeShuffle'));
      });
      if(btnRepeat) btnRepeat.addEventListener('click', () => {
        state.playMode = 'single';
        updateModeBtns();
        showToast(t('toastPlaymodeSingle'));
      });
      if(btnInfinity) btnInfinity.addEventListener('click', () => {
        state.playMode = 'list';
        updateModeBtns();
        showToast(t('toastPlaymodeList'));
      });

      function updateModeBtns() {
        if(btnShuffle) btnShuffle.classList.toggle('active', state.playMode === 'shuffle');
        if(btnRepeat) btnRepeat.classList.toggle('active', state.playMode === 'single');
        if(btnInfinity) btnInfinity.classList.toggle('active', state.playMode === 'list');
      }

      // 搜索模态框逻辑
      dom.searchToggle.addEventListener('click', () => {
        dom.searchModal.classList.add('active');
        dom.searchInput.focus();
      });

      dom.searchCancel.addEventListener('click', () => {
        dom.searchModal.classList.remove('active');
      });

      // 搜索框回车搜索
      dom.searchInput.addEventListener('keydown', e => {
        if(e.key === 'Enter') {
          state.searchKeyword = dom.searchInput.value.trim();
          searchAllSources(true);
        }
      });

      if(dom.playBtn) dom.playBtn.addEventListener('click',togglePlayPause);
      if(dom.prevBtn) dom.prevBtn.addEventListener('click',()=>playNext('prev'));
      if(dom.nextBtn) dom.nextBtn.addEventListener('click',()=>playNext('next'));
      if(dom.favBtn) dom.favBtn.addEventListener('click',toggleFavoriteCurrent);
      if(dom.downloadBtn) dom.downloadBtn.addEventListener('click',()=>downloadCurrentTrack());

      dom.volumeSlider.addEventListener('input',()=>{
        dom.audio.volume=parseFloat(dom.volumeSlider.value);
      });

      dom.audio.addEventListener('timeupdate',()=>{
        if(state.isSeeking) return;
        const cur=dom.audio.currentTime||0, dur=dom.audio.duration||0;
        
        // 桌面端时间更新
        const deskCur = document.getElementById('current-time');
        const deskTotal = document.getElementById('total-time');
        const deskBar = document.getElementById('progress-bar');
        
        if(deskCur) deskCur.textContent = formatTime(cur);
        if(deskTotal) deskTotal.textContent = formatTime(dur);
        if(dur>0 && deskBar) deskBar.style.width = (cur/dur*100)+'%';

        // 移动端 (Apple Music) 时间更新 - 优先使用 ID 确保精准
        const amCur = document.getElementById('am-time-cur');
        const amRem = document.getElementById('am-time-rem');
        const amFill = document.getElementById('am-progress-fill');

        if(amCur) amCur.textContent = formatTime(cur);
        if(amRem) {
          const rem = dur - cur;
          amRem.textContent = '-' + formatTime(rem > 0 ? rem : 0);
        }
        if(dur>0 && amFill){
          amFill.style.width = (cur/dur*100)+'%';
        }
        
        updateLyricsHighlight(cur);
      });

      // 进度条点击跳转 (Seek) - 兼容移动端和桌面端
      const setupSeek = (wrapperId, audio) => {
        const wrap = document.getElementById(wrapperId);
        if(!wrap) return;
        wrap.addEventListener('click', (e) => {
          const rect = wrap.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const r = Math.max(0, Math.min(1, x / rect.width));
          if(audio.duration){
            audio.currentTime = r * audio.duration;
          }
        });
      };
      
      setupSeek('am-progress-wrapper', dom.audio);
      setupSeek('progress-wrapper', dom.audio);


      // 强制更新循环 (Fallback)
      setInterval(() => {
        const audios = document.getElementsByTagName('audio');
        const mainAudio = dom.audio || audios[0];
        if(!mainAudio) return;

        const cur = mainAudio.currentTime || 0;
        const dur = mainAudio.duration || 0;
        const debug = document.getElementById('am-debug-overlay');
        
        if(debug) {
          debug.textContent = `DEBUG: AudioCount=${audios.length} | T=${cur.toFixed(2)} / D=${dur.toFixed(2)} | Playing=${!mainAudio.paused}`;
        }
        
        // 无条件保底更新所有时间显示
        const amCur = document.getElementById('am-time-cur');
        const amRem = document.getElementById('am-time-rem');
        const amFill = document.getElementById('am-progress-fill');

        if(amCur) amCur.textContent = formatTime(cur);
        if(amRem) {
          const rem = dur - cur;
          amRem.textContent = '-' + formatTime(rem > 0 ? rem : 0);
        }
        if(dur > 0 && amFill){
          amFill.style.width = (cur/dur*100)+'%';
        }

        // 桌面端同步
        const deskCur = document.getElementById('current-time');
        const deskBar = document.getElementById('progress-bar');
        if(deskCur) deskCur.textContent = formatTime(cur);
        if(dur > 0 && deskBar) deskBar.style.width = (cur/dur*100)+'%';

        if(cur > 0) updateLyricsHighlight(cur);
      }, 500);

      dom.audio.addEventListener('play',()=>{
        state.isPlaying=true;
        if(dom.playBtn) dom.playBtn.innerHTML = '<i data-lucide="pause"></i>';
        if(dom.coverImg) { dom.coverImg.classList.add('playing'); dom.coverImg.classList.remove('paused'); }
        if(window.lucide) window.lucide.createIcons();
      });
      dom.audio.addEventListener('pause',()=>{
        state.isPlaying=false;
        if(dom.playBtn) dom.playBtn.innerHTML = '<i data-lucide="play"></i>';
        if(dom.coverImg) { dom.coverImg.classList.add('paused'); dom.coverImg.classList.remove('playing'); }
        if(window.lucide) window.lucide.createIcons();
      });
      dom.audio.addEventListener('ended',()=>{
        playNext('next');
      });

      console.log('setupEvents: Core listeners attached.');

      document.querySelectorAll('.playlist-tab').forEach(tab=>{
        tab.addEventListener('click',()=>{
          document.querySelectorAll('.playlist-tab').forEach(el=>el.classList.toggle('active',el===tab));
          const tName=tab.dataset.tab;
          if(tName==='results'){
            state.playContext.type='results';state.playContext.playlistId=null;
          }else if(tName==='favorites'){
            state.playContext.type='favorites';state.playContext.playlistId=null;
          }else{
            state.playContext.type='playlist';
            if(state.playlists.length&&!state.playContext.playlistId)state.playContext.playlistId=state.playlists[0].id;
          }
          renderPlaylistList();
          const list=getActiveList();
          if(!state.currentTrack && list.length) playFromList(state.playContext.type,0,state.playContext.playlistId);
        });
      });

      if(dom.newPlaylistBtn) dom.newPlaylistBtn.addEventListener('click',openPlaylistModal);
      if(dom.playlistConfirmBtn) dom.playlistConfirmBtn.addEventListener('click',createPlaylist);
      if(dom.playlistCancelBtn) dom.playlistCancelBtn.addEventListener('click',closePlaylistModal);
      if(dom.playlistCloseBtn) dom.playlistCloseBtn.addEventListener('click',closePlaylistModal);
      if(dom.playlistModal) dom.playlistModal.addEventListener('click',e=>{if(e.target===dom.playlistModal)closePlaylistModal();});
      if(dom.playlistSelect) {
        dom.playlistSelect.addEventListener('change',()=>{
          state.playContext.playlistId=dom.playlistSelect.value;
          renderPlaylistList();
        });
      }
      if(dom.addCurrentBtn) dom.addCurrentBtn.addEventListener('click',addCurrentToPlaylist);

      if(dom.shortcutToggleBtn) dom.shortcutToggleBtn.addEventListener('click',()=>{dom.shortcutModal.classList.add('show');});
      if(dom.shortcutCloseBtn) dom.shortcutCloseBtn.addEventListener('click',()=>{dom.shortcutModal.classList.remove('show');});
      if(dom.shortcutModal) dom.shortcutModal.addEventListener('click',e=>{if(e.target===dom.shortcutModal)dom.shortcutModal.classList.remove('show');});

      document.querySelectorAll('.playmode-btn').forEach(btn=>{
        btn.addEventListener('click',()=>{
          state.playMode=btn.dataset.mode;
          setPlaymodeUI();
          if(state.playMode==='list')showToast(t('toastPlaymodeList'));
          else if(state.playMode==='single')showToast(t('toastPlaymodeSingle'));
          else showToast(t('toastPlaymodeShuffle'));
        });
      });

      document.addEventListener('keydown',e=>{
        const tag=document.activeElement.tagName.toLowerCase();
        const typing=(tag==='input'||tag==='textarea');
        const playlistOpen=dom.playlistModal.classList.contains('show');
        const shortcutOpen=dom.shortcutModal.classList.contains('show');

        if(e.key==='Escape'){
          if(playlistOpen)closePlaylistModal();
          if(shortcutOpen)dom.shortcutModal.classList.remove('show');
          return;
        }

        if(playlistOpen || shortcutOpen){
          return;
        }

        if(e.code==='Space'&&!typing){e.preventDefault();togglePlayPause();}
        if(e.key==='ArrowRight'&&!typing){dom.audio.currentTime=(dom.audio.currentTime||0)+5;}
        if(e.key==='ArrowLeft'&&!typing){dom.audio.currentTime=Math.max(0,(dom.audio.currentTime||0)-5);}
        if(e.key==='ArrowUp'&&!typing){dom.audio.volume=Math.min(1,(dom.audio.volume||0)+0.05);dom.volumeSlider.value=dom.audio.volume;}
        if(e.key==='ArrowDown'&&!typing){dom.audio.volume=Math.max(0,(dom.audio.volume||0)-0.05);dom.volumeSlider.value=dom.audio.volume;}
        if((e.key==='n'||e.key==='N')&&!typing)playNext('next');
        if((e.key==='p'||e.key==='P')&&!typing)playNext('prev');
        if((e.key==='f'||e.key==='F')&&!typing)toggleFavoriteCurrent();
        if((e.key==='l'||e.key==='L')&&!typing){
          state.lyricsAlt=!state.lyricsAlt;
          dom.lyricsContainer.classList.toggle('alt-style',state.lyricsAlt);
          showToast(t('toastLyricStyleSwitched'));
        }
        if((e.key==='m'||e.key==='M')&&!typing){
          state.muted=!state.muted;
          dom.audio.muted=state.muted;
        }
        if(e.key==='/'&&!typing){e.preventDefault();dom.searchInput.focus();dom.searchInput.select();}
      });
    }

    // ===================== 初始化 =====================

    let isInitialized = false;
    function init(){
      if(isInitialized) return;
      isInitialized = true;
      
      const dbg = document.getElementById('am-debug-overlay');
      const log = (msg) => { if(dbg) dbg.textContent = 'DEBUG: ' + msg; console.log(msg); };
      
      log('init() started');
      
      try { setupDOM(); log('setupDOM OK'); } catch(e) { log('setupDOM FAILED: ' + e.message); }
      try {
        const lg=localStorage.getItem('pikachu-music-lang'); 
        if(lg)state.language=lg;
      } catch(e){}
      
      try { setupParticles(); } catch(e) { log('setupParticles FAILED: ' + e.message); }
      try { setupRipple(); } catch(e) { log('setupRipple FAILED: ' + e.message); }
      try { setupEvents(); log('setupEvents OK'); } catch(e) { log('setupEvents FAILED: ' + e.message); }
      
      try { setLanguage(state.language); } catch(e) {}
      try { setPlaymodeUI(); } catch(e) {}
      
      try {
        if(dom.audio && dom.volumeSlider) {
          dom.audio.volume=parseFloat(dom.volumeSlider.value || 0.7);
        }
      } catch(e) {}
      
      try { setupMediaSession(); } catch(e) {}
      try { updateDocumentTitle(); } catch(e) {}
      
      try {
        if (isMobile() && document.querySelector('.playlist-panel')) {
          document.querySelector('.playlist-panel').classList.add('mobile-hidden');
        }
      } catch(e) {}
      
      // 多阶段图标初始化
      if(window.lucide) window.lucide.createIcons();
      window.addEventListener('load', () => {
        if(window.lucide) window.lucide.createIcons();
        setTimeout(() => { if(window.lucide) window.lucide.createIcons(); }, 1000);
      });
      
      // ★ 独立的音频同步心跳 - 不依赖 setupEvents
      log('Starting audio sync heartbeat...');
      setInterval(() => {
        try {
          const audio = dom.audio || document.getElementById('audio') || document.querySelector('audio');
          if(!audio) { if(dbg) dbg.textContent = 'DEBUG: No audio element found!'; return; }
          
          const cur = audio.currentTime || 0;
          const dur = audio.duration || 0;
          if(dbg) dbg.textContent = 'DEBUG: T=' + cur.toFixed(1) + '/' + dur.toFixed(1) + ' Playing=' + !audio.paused;
          
          // 更新进度条和时间
          const amCur = document.getElementById('am-time-cur');
          const amRem = document.getElementById('am-time-rem');
          const amFill = document.getElementById('am-progress-fill');
          if(amCur) amCur.textContent = formatTime(cur);
          if(amRem) amRem.textContent = '-' + formatTime(Math.max(0, dur - cur));
          if(dur > 0 && amFill) amFill.style.width = (cur/dur*100) + '%';
          
          // 桌面端
          const dkCur = document.getElementById('current-time');
          const dkBar = document.getElementById('progress-bar');
          if(dkCur) dkCur.textContent = formatTime(cur);
          if(dur > 0 && dkBar) dkBar.style.width = (cur/dur*100) + '%';
          
          // 歌词
          if(cur > 0) updateLyricsHighlight(cur);
        } catch(e) {
          if(dbg) dbg.textContent = 'DEBUG: Heartbeat error: ' + e.message;
        }
      }, 500);
      
      log('init() completed successfully');
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }

  })();
  