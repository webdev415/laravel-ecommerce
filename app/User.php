<?php

namespace Modu;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContracts;

class User extends Model implements AuthenticatableContracts
{
    use Authenticatable;
    
    protected $table = 'users';
    
    protected $fillable = [
        'username', 
        'email', 
        'password',
        'first_name',
        'last_name',
        'location',
    ];

    protected $hidden = [
        'password', 
        'remember_token',
    ];
    
    public function getName()
    {
        if($this->first_name && $this->last_name){
            return "{$this->first_name} {$this->last_name}";    
        }
        
        if($this->first_name){
            return $this->first_name;
        }
        
        return null;
    }
    
    public function getNameOrUsername ()
    {
        return $this->getName() ?: $this->username;
    }
    
    public function getFirstNameOrUsername ()
    {
        return $this->first_name ?: $this->username;
    }
    
    public function getAvatarUrl () {
        return "https://www.gravatar.com/avatar/{{ md5($this->email) }}?d=mm&s=40";
    }
    
    public function statuses () {
        return $this->hasMany('Modu\Status', 'user_id');    
    }
    
    public function friendsOfMine () {
        return $this->belongsToMany('Modu\User', 'friends', 'user_id', 'friend_id');
    }
    
    public function friendOf () {
        return $this->belongsToMany('Modu\User', 'friends', 'friend_id', 'user_id');
    }
    
    
    public function friends () {
        return $this->friendsOfMine()
            ->wherePivot('accepted', true)
            ->get()
            ->merge($this->friendOf()->wherePivot('accepted', true)->get());
    }
    
    public function friendRequests () {
        return $this->friendsOfMine()
            ->wherePivot('accepted', false)
            ->get();
    }
    
    public function friendRequestsPending () {
        return $this->friendOf()
            ->wherePivot('accepted', false)
            ->get();
    }
    
    public function hasFriendRequestsPending (User $user) {
        return (bool) $this->friendRequestsPending()
            ->where('id', $user->id)
            ->count();
    }
    
    public function hasFriendRequestsReceived (User $user) {
        return (bool) $this->friendRequests()
            ->where('id', $user->id)
            ->count();
    }
    
    public function addFriend (User $user) {
        $this->friendOf()->attach($user->id);
    }
    
    public function acceptFriendRequest (User $user) {
        $this->friendRequests()->where('id', $user->id)->first()->pivot->update([
            'accepted' => true,    
        ]);
    }
    
    public function isFriendsWith (User $user) {
        return (bool) $this->friends()->where('id', $user->id)->count();
    }
    
}








