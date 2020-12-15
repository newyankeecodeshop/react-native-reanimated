#pragma once

#include "SharedParent.h"
#include "MutableValueSetterProxy.h"
#include <mutex>
#include <jsi/jsi.h>
#include <map>
#include "JSIStoreValueUser.h"
#include <set>

using namespace facebook;

namespace reanimated {

class MutableSet : public jsi::HostObject, public std::enable_shared_from_this<MutableSet>, public StoreUser {
  private:
  friend MutableValueSetterProxy;
  NativeReanimatedModule *module;
  std::mutex readWriteMutex;
  std::shared_ptr<ShareableValue> value;
  std::set<std::shared_ptr<ShareableValue>> setItems;
  std::weak_ptr<jsi::Value> animation;
  std::map<unsigned long, std::function<void()>> listeners;

  void setValue(jsi::Runtime &rt, const jsi::Value &newValue);
  jsi::Value getValue(jsi::Runtime &rt);

  public:
  MutableSet(jsi::Runtime &rt, const jsi::Value &initial, NativeReanimatedModule *module, std::shared_ptr<Scheduler> s);

  public:
  void set(jsi::Runtime &rt, const jsi::PropNameID &name, const jsi::Value &value);
  jsi::Value get(jsi::Runtime &rt, const jsi::PropNameID &name);
  std::vector<jsi::PropNameID> getPropertyNames(jsi::Runtime &rt);
};

}