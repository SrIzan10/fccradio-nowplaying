type Station = {
    id: number;
    name: string;
    shortcode: string;
    description: string;
    frontend: string;
    backend: string;
    listen_url: string;
    url: string;
    public_player_url: string;
    playlist_pls_url: string;
    playlist_m3u_url: string;
    is_public: boolean;
    mounts: Mount[];
    remotes: Remote[];
  };
  
  type Mount = {
    path: string;
    is_default: boolean;
    id: number;
    name: string;
    url: string;
    bitrate: number;
    format: string;
    listeners: {
      total: number;
      unique: number;
      current: number;
    };
  };
  
  type Remote = {
    id: number;
    name: string;
    url: string;
    bitrate: number;
    format: string;
    listeners: {
      total: number;
      unique: number;
      current: number;
    };
  };
  
  type Listeners = {
    total: number;
    unique: number;
    current: number;
  };
  
  type Live = {
    is_live: boolean;
    streamer_name: string;
    broadcast_start: null | number;
  };
  
  type Song = {
    id: string;
    text: string;
    artist: string;
    title: string;
    album: string;
    genre: string;
    lyrics: string;
    art: string;
    custom_fields: any[];
  };
  
  type NowPlaying = {
    elapsed: number;
    remaining: number;
    sh_id: number;
    played_at: number;
    duration: number;
    playlist: string;
    streamer: string;
    is_request: boolean;
    song: Song;
  };
  
  type PlayingNext = {
    cued_at: number;
    duration: number;
    playlist: string;
    is_request: boolean;
    song: Song;
  };
  
  type SongHistory = {
    sh_id: number;
    played_at: number;
    duration: number;
    playlist: string;
    streamer: string;
    is_request: boolean;
    song: Song;
  };
  
  export type Data = {
    station: Station;
    listeners: Listeners;
    live: Live;
    now_playing: NowPlaying;
    playing_next: PlayingNext;
    song_history: SongHistory[];
    is_online: boolean;
    cache: string;
  };